const techBadgeMap = {
    // if this map does not contains your key, this option('default') will be used
    default:        { name: "Unknown",      colorClass: "bg-secondary text-white", icon: "fa-solid fa-question-circle" },
    java:           { name: "Java",         colorClass: "bg-orange text-white",    icon: "fa-brands fa-java" },
    swing:          { name: "Swing",        colorClass: "bg-dark text-white",      icon: "fa-solid fa-desktop" },
    maven:          { name: "Maven",        colorClass: "bg-maroon text-white",    icon: "fa-solid fa-cogs" },
    spring_boot:    { name: "Spring Boot",  colorClass: "bg-success text-white",   icon: "fa-solid fa-leaf" },
    react:          { name: "React",        colorClass: "bg-info text-dark",       icon: "fa-brands fa-react" },
    docker:         { name: "Docker",       colorClass: "bg-primary text-white",   icon: "fa-brands fa-docker" },
    typescript:     { name: "TypeScript",   colorClass: "bg-blue text-white",      icon: "fa-brands fa-js" },
    mysql:          { name: "MySQL",        colorClass: "bg-blue text-dark",       icon: "fa-solid fa-database" },
    itext:          { name: "iText",        colorClass: "bg-secondary text-white", icon: "fa-solid fa-file-pdf" },
    javascript:     { name: "JavaScript",   colorClass: "bg-warning text-dark",    icon: "fa-brands fa-js" },
    html:           { name: "HTML",         colorClass: "bg-danger text-white",    icon: "fa-brands fa-html5" },
    css:            { name: "CSS",          colorClass: "bg-primary text-white",   icon: "fa-brands fa-css3-alt" },
    bootstrap:      { name: "Bootstrap",    colorClass: "bg-purple text-white",    icon: "fa-brands fa-bootstrap" },
    csharp:         { name: "C#",           colorClass: "bg-dark text-white",      icon: "fa-solid fa-hashtag" },
    aspnet_core:    { name: "ASP.NET Core", colorClass: "bg-purple text-white",    icon: "fa-brands fa-microsoft"},
    windows_forms:  { name: "Windows Forms",colorClass: "bg-secondary text-white", icon: "fa-brands fa-windows" },
    mssql:          { name: "MsSQL",        colorClass: "bg-info text-dark",       icon: "fa-solid fa-database" },
    android:        { name: "Android",      colorClass: "bg-success text-white",   icon: "fa-brands fa-android" },
    firebase:       { name: "Firebase",     colorClass: "bg-warning text-dark",    icon: "fa-solid fa-fire" },
    d3js:           { name: "D3.js",        colorClass: "bg-orange text-white",    icon: "fa-solid fa-chart-line" },
    // custom badges can be defined for any technology on this map 
    // after defining you can use it in data.js with key name('spring_boot', 'd3js' etc.)
};
