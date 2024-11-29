"use client";

import { type IntegrationType } from "@/Data/PageData";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumn(props: {
    integrations: IntegrationType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}
            whileHover={{
                y: 0,
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map(() => (
                <Fragment key={Math.random() + 1}>
                    {integrations.map((integration) => (
                        <div
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                            key={integration.name}
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={integration.icon}
                                    alt={`${integration.name} icon`}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center m-6">
                                {integration.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}
