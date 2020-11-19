import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import * as Papa from "papaparse";



export const CsvToXslsXPage: React.FC = () => {

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file: any) => {
            console.log("ovo je baš tužno");
            // const reader = new FileReader()

            // reader.onabort = () => console.log('file reading was aborted')
            // reader.onerror = () => console.log('file reading has failed')
            // reader.onload = () => {
            //     // Do whatever you want with the file contents
            //     const binaryStr = reader.result
            //     console.log(binaryStr)
            // }
            // reader.readAsArrayBuffer(file)

            // Papa.parse(f, { complete: (result) => { console.log('parsovan!', result); } })
        });

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: [
            ".csv, text/csv"
        ],

    })
    return (
        <Box background="gray.100" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" width="80vw" height="80vh" d="flex" alignItems="center" justifyItems="center" >
            <Box {...getRootProps()} width="100%" height="100%" d="flex" alignItems="center">
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <Text width="100%" textAlign="center" fontSize="xl" fontWeight="bold">Spustite fajl ovde</Text> :
                        <Text width="100%" textAlign="center" fontSize="xl" fontWeight="bold">Prevucite .CSV fajl ovde ili kliknite za izbor fajla</Text>
                }
            </Box>
        </Box>
    );
}