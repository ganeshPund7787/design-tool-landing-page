import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image
                        src={designExample1Image}
                        alt="design example 1 image"
                        draggable={false}
                    />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="design example 2 image"
                        draggable={false}
                    />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6">
                    Thoughtful design, <br className="hidden lg:inline-block" />{" "}
                    crafted intentionally.
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Creative tools should inspire, not hinder. Layers integrates
                    advanced features with an intuitive interface to maintain
                    your creative momentum.
                </p>
                <form
                    action=""
                    className="flex border border-white/15 rounded-full py-2 mt-8 max-w-lg mx-auto md:px-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-2 md:flex-1 outline-none w-full"
                    />
                    <Button
                        type="submit"
                        className="whitespace-nowrap"
                        size="sm"
                        variant="primary"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
