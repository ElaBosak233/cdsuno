import { Button } from "@/components/core";
import { FallbackProps } from "react-error-boundary";
import styles from "./ErrorFallback.module.scss";
import { Icon } from "@/components/core/Icon";
import SolarPlanet2BoldDuotone from "~icons/solar/planet-2-bold-duotone";
import { Textarea } from "@/components/core/Textarea";
import { Flex } from "@/components/core/Flex";
import RestartBold from "~icons/solar/restart-bold";

export function ErrorFallback(props: FallbackProps) {
    const { error, resetErrorBoundary } = props;

    return (
        <div className={styles["root"]}>
            <div className={styles["nav"]}>
                <Icon
                    icon={<SolarPlanet2BoldDuotone />}
                    className={styles["icon"]}
                />
                <h2 className={styles["title"]}>好像出了点问题</h2>
            </div>
            <Textarea value={error.stack} width="50vw" height="50vh" />
            <Flex className={styles["actions"]}>
                <Button onClick={resetErrorBoundary} icon={<RestartBold />}>
                    重置
                </Button>
                <Button onClick={() => console.log(error)}>查看错误信息</Button>
            </Flex>
        </div>
    );
}
