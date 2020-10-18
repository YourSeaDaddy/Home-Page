const Config = {
    name: "Tim Saulino",
    scale: 1,
    Links: [
        [
            "2004 WRX",
            [
                ["NASIOC", "https://forums.nasioc.com/"],
                ["RockAuto", "https://www.rockauto.com/en/catalog/subaru,2004,impreza,2.0l+h4+turbocharged,1426801"]
            ]
        ],
        [
            "Tech",
            [
                ["IP Leak", "https://browserleaks.com/ip"],
                ["Email", "https://mail.zoho.com/zm/"]

            ]
        ],
        [
            "UTSA",
            [
                ["BlackBoard", "https://utsa.blackboard.com"],
                ["ASAP", "https://sso-cas.it.utsa.edu/cas/login?service=https%3A%2F%2Fasap.utsa.edu%3A7891%2Fssomanager%2Fc%2FSSB"],
                ["DegreeWorks", "https://sso-cas.it.utsa.edu/cas/login?service=https%3A%2F%2Fdworkswebprod.sis.utsa.edu%2FDashboardServlet%2Fj_spring_cas_security_check"]
            ]
        ],
        [
            "Research",
            [
                ["COMPTIA SEC+", "https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests"],
                ["lo-fi radio", "https://chillhop.com/live/lofihiphop/"],
                ["Github", "https://github.com/YourSeaDaddy?tab=repositories"],
                ["Redmi Note 9s", "https://forum.xda-developers.com/redmi-note-9-pro"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
