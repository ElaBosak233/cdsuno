import { Box } from "@/components/core/Box";
import styles from "./HydrateFallback.module.scss";
import { Stack } from "@/components/core/Stack/Stack";
import { Flex } from "@/components/core/Flex";
import Loading from "~icons/svg-spinners/180-ring-with-bg";

export function HydrateFallback() {
    return (
        <Box className={styles["root"]}>
            <Stack gap={"15px"} align={"center"}>
                <Flex gap={"15px"}>
                    <Loading />
                    <Box>加载中</Box>
                </Flex>
            </Stack>
        </Box>
    );
}
