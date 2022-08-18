import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Guilherme Mota</Text>
                    <Text
                        color='gray.300'
                        fontSize='small'
                    >
                        motas6617@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name="Guilher Mota" src="https://xesque.rocketseat.dev/users/avatar/profile-02c2d5a3-018b-4209-9483-6f7d6c893c25-1648914013983.jpg" />
        </Flex>
    )
}