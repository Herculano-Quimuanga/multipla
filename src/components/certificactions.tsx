import vmWare from "/images/vmWare.png";
import cisco from "/images/cisco.png";
import microsoft from "/images/ms.png";
import netApp from "/images/netApp.png";
import microTik from "/images/microTik.png"

const logos = [
    { src: vmWare },
    { src: cisco },
    { src: microsoft },
    { src: netApp },
    { src: microTik },
];

const Certificactions = () => {
    return (
        <section className="py-20 bg-slate-900">
            {/* Trust Indicators */}
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-4xl font-semibold text-white mb-3">
                        Certificações que impactam
                    </h3>
                    <p className="text-muted-foreground text-xl">
                        Somos reconhecidos por instituições de grande renome tecnológico
                    </p>
                </div>

                {/* Company Logos Placeholder */}
                <div className="w-50 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-2 items-center justify-center mx-auto">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={`Logo ${index + 1}`}
                            className="img_certi transition-transform duration-300 hover:scale-105 opacity-75 hover:opacity-100"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificactions