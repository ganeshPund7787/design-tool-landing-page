import IntegrationColumn from "@/components/IntegrationColumn";
import Tag from "@/components/Tag";
import { integrations } from "@/Data/PageData";

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16 ">
                    <div className="">
                        <Tag>Integration</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Integrates smoothly with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/15 mt-4 text-lg ">
                            Layers effortlessly integrates with your preferred
                            tools, making it simple to fit into any workflow and
                            collaborate across platforms.
                        </p>
                    </div>
                    <div className="">
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
