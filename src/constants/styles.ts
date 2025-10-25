// Section backgroud image
export const sectionBgImage: React.CSSProperties = {
    backgroundImage: "url(/images/bg-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

// Section padding-x
export const sectionXpadding = "px-8 sm:px-10 xl:px-32";

// Section classname - tailwindcss
export const sectionClassName = `h-auto bg-white relative py-16 flex flex-col gap-8 justify-center 
overflow-hidden will-change-transform 
md:py-24 xl:py-32 ${sectionXpadding}`;
