import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    // gerando um array em branco com o tamanho de siblingsCount
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0);
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
}: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []

    return (
        <Stack
            direction={['column', 'row']}
            spacing='6'
            mt='8'
            justify='space-between'
            align='center'
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction='row' spacing='2'>

                // first page
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} numberPage={1} />
                        {currentPage > (2 + siblingsCount) && <Text color='gray.300' width='8' textAlign='center'>...</Text>}
                    </>
                )}

                // prevent pages
                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} numberPage={page} key={page} />
                })}

                <PaginationItem onPageChange={onPageChange} numberPage={currentPage} isCurrent />

                // next pages
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} numberPage={page} key={page} />
                })}

                // last page
                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && <Text color='gray.300' width='8' textAlign='center'>...</Text>}
                        <PaginationItem onPageChange={onPageChange} numberPage={lastPage} />
                    </>
                )}

            </Stack>
        </Stack>
    )
}