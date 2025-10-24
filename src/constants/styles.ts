// Section backgroud image
export const sectionBgImage: React.CSSProperties = {
    backgroundImage: "url(/images/bg-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

// Section padding-x
export const sectionXpadding = "px-4 md:px-5 lg:px-10 xl:px-32";

// Section classname - tailwindcss
export const sectionClassName = `h-auto bg-white relative py-24 flex flex-col gap-8 justify-center 
overflow-hidden will-change-transform 
xl:py-32 ${sectionXpadding}`;
