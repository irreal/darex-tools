import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as Papa from "papaparse";
import { utils, writeFile } from "xlsx"


function formatDate(date: any) {
    var d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const CsvToXslsXPage: React.FC = () => {

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file: any) => {
            // const reader = new FileReader()

            // reader.onabort = () => console.log('file reading was aborted')
            // reader.onerror = () => console.log('file reading has failed')
            // reader.onload = () => {
            //     // Do whatever you want with the file contents
            //     const binaryStr = reader.result
            //     console.log(binaryStr)
            // }
            // reader.readAsArrayBuffer(file)

            Papa.parse(file, {
                header: true,
                complete: (result) => {

                    console.log('parsovan!', result);
                    const ws = utils.json_to_sheet(result.data);
                    const book = utils.book_new();
                    utils.book_append_sheet(book, ws, "Sheet1");
                    writeFile(book, `aks-expeditor-${formatDate(new Date())}.xls`);
                }
            })
        });

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: [
            ".csv"
        ],

    })
    return (
        <>
            <Box position="fixed" left="0" top="0" width="100vw" height="100vh" zIndex={-1} opacity={0.1}>
                <video id="video" className="h-v is-playing is-visible" muted loop autoPlay width="100%" height="100%" >
                    <source src="https://www.darex.rs/uploads/documents/empire_plugin/Sequence%2001_5.mp4" type="video/mp4" />
                </video>
            </Box>
            <Box background="gray.300" boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;" width="80vw" height="80vh" d="flex" alignItems="center" justifyItems="center" opacity="0.9">
                <Box {...getRootProps()} width="100%" height="100%" d="flex" alignItems="center" opacity={0.8}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <Text width="100%" textAlign="center" fontSize="xl" fontWeight="bold">Spustite fajl ovde</Text> :
                            <Text width="100%" textAlign="center" fontSize="xl" fontWeight="bold">Prevucite .CSV fajl ovde ili kliknite za izbor fajla</Text>
                    }
                </Box>
            </Box >
        </>
    );
}