import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where powers meet{" "}
                    <span className="text-lime-400">Simplicity</span>{" "}
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8">
                    <FeatureCard
                        title="Real-Time Collaboration"
                        description="Work together seamlessly with conflict-free team editing."
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    className="rounded-full"
                                    src={avatar1}
                                    alt="Avatar 1"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    className="rounded-full"
                                    src={avatar2}
                                    alt="Avatar 2"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    className="rounded-full"
                                    alt="Avatar 3"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to user actions."
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                we'e achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Increadible
                                </span>{" "}
                                grouth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more efficiently."
                    >
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28">Shift</Key>
                            <Key className="">alt</Key>
                            <Key className="">C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8">
                    {features.map((feature) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl"
                            key={feature}
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center">
                                &#10038;
                            </span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
