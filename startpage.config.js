const defaultConfig = {
	username: "Zervo",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e1e2e",
		glowColor: "#6b5cb157",
		white: "#cdd6f4",
		gray: "#7f849c",
		black: "#11111b",
		red: "#f38ba8",
		green: "#a6e3a1",
		yellow: "#f9e2af",
		blue: "#89b4fa",
		cyan: "#89dceb",
		magenta: "#cba6f7",
		violet: "#f5c2e7",
		orange: "fab387"
	},
	wallpaper: {
		url: "https://wallpapercave.com/wp/forev4s.jpg",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://duckduckgo.com/?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Biltema Search",
				url: "https://www.biltema.se/soksida/?query={}"
			},
			{
				alias: "t",
				name: "Tradera Search",
				url: "https://www.tradera.com/search?q={}"
			},
			{
				alias: "o",
				name: "Octopart Search",
				url: "https://octopart.com/search?q={}"
			},
			{
				alias: "c",
				name: "Conrad Search",
				url: "https://www.conrad.se/sv/search.html?search={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Reddit Search",
				url: "https://www.reddit.com/search/?q={}"
			},
			{
				alias: "sr",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			},
			{
				alias: "yt",
				name: "YouTube Search",
				url: "https://www.youtube.com/results?search_query={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "YouTube",
						url: "https://www.youtube.com",
						icon: "mdi:youtube"
					},
					{
						name: "Keybase",
						url: "https://keybase.io/",
						icon: "fa-brands:keybase"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "OCI",
						url: "https://www.oracle.com/cloud/",
						icon: "simple-icons:oracle"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "GitLab",
						url: "https://gitlab.com",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Cloudflare",
						url: "https://www.cloudflare.com",
						icon: "mdi:cloud"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "Mastodon",
						url: "https://mastodon.social/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Element",
						url: "https://element.io",
						icon: "mdi:dots-circle"
					}
				]
			},
			{
				title: "Gaming",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Steam",
						url: "https://store.steampowered.com",
						icon: "fa-brands:steam"
					},
					{
						name: "Kinguin",
						url: "https://www.kinguin.net",
						icon: "mdi:penguin"
					},
					{
						name: "Inet",
						url: "https://www.inet.se",
						icon: "uil:circuit"
					},
					{
						name: "Modrinth",
						url: "https://modrinth.com",
						icon: "mdi:wrench"
					}
				]
			},
			{
				title: "Science",
				color: "blue",
				align: "left",
				links: [
					{
						name: "PopSci",
						url: "https://popsci.com/",
						icon: "material-symbols:science"
					},
					{
						name: "Space",
						url: "fa6-solid:user-astronaut",
						icon: "mdi:reddit"
					},
					{
						name: "NASA",
						url: "https://blogs.nasa.gov/",
						icon: "simple-icons:nasa"
					},
					{
						name: "ESA",
						url: "https://blogs.esa.int/",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Electronics",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "Octopart",
						url: "https://octopart.com/",
						icon: "mdi:integrated-circuit-chip"
					},
					{
						name: "DigiKey",
						url: "https://www.digikey.com",
						icon: "mdi:chip"
					},
					{
						name: "Conrad",
						url: "https://www.conrad.se",
						icon: "mdi:alpha-c-circle-outline"
					},
					{
						name: "JLCPCB",
						url: "https://jlcpcb.com",
						icon: "mdi:factory"
					}
				]
			}
		]
	}
}

export default defaultConfig
