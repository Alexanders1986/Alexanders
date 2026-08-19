// =========================================================
// CONTENT — all site copy, in English and Spanish.
// Edit this file to update text; render.js turns it into HTML.
// =========================================================
const CONTENT = {
	en: {
		nav: {
			about: "About",
			skills: "Skills",
			experience: "Experience",
			certifications: "Certifications",
			education: "Education",
			contact: "Contact",
		},

		hero: {
			role: "Salesforce Certified Systems Engineer",
			name: "Jose Alexander Salamanca Lozano",
			terminal: {
				whoami: "whoami",
				catCmd: "cat summary.txt",
				lines: [
					"// 12 years building solutions on the Salesforce platform:",
					"// Apex, LWC, Flows, integrations, and business process automation.",
					"// Agile (SCRUM) methodologies · .NET · PHP · enterprise infrastructure.",
				],
			},
			statement:
				"Delivering enterprise Salesforce solutions across Colombia, Mexico, Peru, Argentina, the United States, and Asia-Pacific for over a decade — from platform architecture and Apex development to AI-driven automation with Agentforce.",
			ctaDownload: "Download Resume (PDF)",
			ctaDownloadOther: "Also available in Spanish (PDF)",
			ctaContact: "Get in touch",
			ctaExperience: "View experience",
			stats: [
				{ num: "12", label: "years of experience" },
				{ num: "8", label: "projects / releases" },
				{ num: "3", label: "Salesforce certifications" },
			],
			profileFacts: [
				{ label: "Experience", value: "12 years" },
				{ label: "Certifications", value: "3 active" },
				{ label: "Languages", value: "Spanish (native) · English (B1+)" },
				{ label: "Location", value: "Bogotá, Colombia" },
			],
		},

		about: {
			title: "Professional profile",
			paragraphs: [
				"Salesforce Certified Systems Engineer with <strong>12 years of experience</strong> in IT projects, specializing in Salesforce platform development and integrations. Strong expertise in system analysis, design, development, and implementation using Agile (SCRUM) methodologies.",
				"His background includes development with <strong>Salesforce, .NET, and PHP</strong>, along with experience in technology infrastructure and enterprise solutions for clients across Colombia, Mexico, Peru, Argentina, the United States, and Asia-Pacific.",
			],
			softSkillsTitle: "Core competencies",
			softSkills: [
				"Problem-solving",
				"Leadership & ownership",
				"Effective communication",
				"Team collaboration",
				"Adaptability",
				"Time management",
				"Attention to detail",
			],
			languagesTitle: "Languages",
			languages: [
				{ name: "Spanish", level: "Native", cls: "native" },
				{ name: "English", level: "Intermediate · B1+", cls: "mid" },
			],
		},

		skills: {
			title: "Technical proficiencies",
			jsonPreview: {
				platform: "Salesforce",
				role: "Senior Developer",
				years: 12,
			},
			technicalTitle: "Technical skills",
			technical: [
				"Apex",
				"Lightning Web Components",
				"Aura Components",
				"Triggers",
				"Flows",
				"Jobs · Batch & Schedule",
				"Visualforce",
				"SOQL",
				"REST API",
				"JavaScript",
				"Agentforce",
				"Git / Bitbucket",
				"Jenkins",
				"Jira",
				"Visual Studio Code",
			],
			complementaryTitle: "Complementary stack",
			complementary: [
				".NET",
				"SQL Server",
				"PHP",
				"SOAP",
				"JSON",
				"SAP Integrations",
			],
			tableRows: [
				{
					label: "Salesforce development",
					items:
						"Apex · Triggers · Flows · Jobs (Batch & Schedule) · Visualforce · Lightning Web Components · Aura Components · SOQL · REST API · Agentforce",
				},
				{
					label: "Languages & frameworks",
					items: "JavaScript · .NET · PHP · SQL Server · JSON",
				},
				{
					label: "Integration & delivery",
					items: "SOAP · SAP Integrations · Git / Bitbucket · Jenkins",
				},
				{
					label: "Tooling & process",
					items: "Jira · Visual Studio Code · Agile / SCRUM methodology",
				},
			],
		},

		experience: {
			title: "Engagement record",
			lede: "professional release history",
			dek: "A chronological record of professional engagements, most recent first.",
			items: [
				{
					hash: "7f3a1c2",
					date: "mar 2026 — present",
					role: "Senior Salesforce Developer",
					context:
						"Technology consulting firm · Client in the healthcare/insurance sector — Argentina",
					bullets: [
						"Developed and implemented solutions using Apex, Flows, Platform Events, and Invocable Actions to automate business processes.",
						"Configured and continuously improved the Agentforce agent: new Actions, updated prompts/instructions, and optimized behavior.",
						"Supported the Round Robin Lead assignment process, ensuring fair distribution among sales advisors with automated notifications.",
						"Optimized SOQL queries, asynchronous processes, and Apex logic applying best practices and Governor Limits.",
						"Developed unit tests, technical documentation, and functional/technical support alongside Business, QA, and Product Owner teams.",
					],
					tools:
						"Apex · Agentforce · SOQL · Lightning Flow · Platform Events · Invocable Actions · Git · SFDX · Jira",
				},
				{
					hash: "4d08b91",
					date: "jul 2025 — dec 2025",
					role: "Senior Salesforce Developer",
					context:
						"Technology consulting firm · Client in the retail sector — Mexico",
					bullets: [
						"Designed and implemented an end-to-end solution to upload files to Apigee from multiple channels (LWC, REST APIs, Apex), reducing duplicated logic.",
						"Developed and exposed RESTful services for external providers, with secure integrations and transactional traceability.",
						"Implemented Apex Triggers for automatic assignment of work orders to suppliers based on complex business rules.",
						"Built Apex service classes to consume external systems and update related orders and order products.",
						"Led implementation activities across DEV, Staging, and UAT, working under SCRUM methodology with Jira.",
					],
					tools:
						"Salesforce Field Service · Apex · SOQL · LWC · REST API · Triggers · Git/Bitbucket · Jenkins · Jira",
				},
				{
					hash: "9e21fa0",
					date: "mar 2025 — apr 2025",
					role: "Senior Salesforce Developer",
					context:
						"Technology consulting firm · Client in the automotive sector — Mexico",
					bullets: [
						"Adapted and customized commercial incentive modules for an automotive-sector client.",
						"Refactored and optimized existing components to improve performance and maintainability.",
						"Implemented business-requested enhancements in Aura Components and Apex.",
						"Managed data configuration: objects, fields, relationships, and automation with Flows.",
					],
					tools:
						"Salesforce · Apex · SOQL · Flows · Aura Components · Visual Studio Code",
				},
				{
					hash: "c76a552",
					date: "jan 2025 — feb 2025",
					role: "Senior Salesforce Developer",
					context: "Technology consulting firm · International client — Mexico",
					bullets: [
						"Developed Apex classes for agent-force systems supporting origin and destination search processes.",
						"Configured Salesforce data model elements: objects, fields, relationships, and permissions.",
						"Ensured solution quality through proper use of SOQL and platform best practices.",
					],
					tools: "Salesforce · Apex · SOQL · Flows",
				},
				{
					hash: "02f6cd8",
					date: "mar 2024 — dec 2024",
					role: "Senior Salesforce Developer",
					context:
						"Technology consulting firm · Client in the banking sector — Peru",
					bullets: [
						"Developed new components and features for a pricing calculator used by the business.",
						"Developed batch and scheduled jobs to update data according to business rules.",
						"Enhanced and maintained internal Salesforce developments aligned with banking requirements.",
						"Supported existing customizations and continuous improvement; managed data, objects, and security.",
					],
					tools: "Salesforce · Apex · SOQL · Flows",
				},
				{
					hash: "b834e17",
					date: "feb 2023 — mar 2024",
					role: "Senior Salesforce Developer",
					context: "Financial / credit sector — Colombia",
					bullets: [
						"Developed Salesforce solutions to automate the Credit Ratification process.",
						"Implemented integrations with legacy systems using SOAP and REST APIs.",
						"Supported and optimized existing customizations (Visualforce, Batch and Schedule jobs).",
						"Migrated multiple Salesforce Classic pages to Lightning Experience.",
					],
					tools:
						"Salesforce · Apex · SOQL · Visualforce · SOAP · REST API · Git",
				},
				{
					hash: "5a1908c",
					date: "nov 2018 — feb 2023",
					role: "Senior Software Development Engineer",
					context:
						"Education / language-learning sector — multi-country operation (LATAM & APAC)",
					bullets: [
						"Supported and enhanced Salesforce customizations across multiple countries (LATAM and APAC).",
						"Developed solutions with Lightning Web Components, Apex, Visualforce, and unit tests.",
						"Managed tasks and releases with Jira, Git/Bitbucket, Jenkins, and Visual Studio Code.",
						"Performed data migrations for Salesforce orgs across the USA, Hong Kong, Korea, Japan, Thailand, and Singapore.",
						"Developed and optimized Experience Cloud pages and enterprise solutions using .NET and SQL.",
					],
					tools:
						"Salesforce · LWC · Apex · Visualforce · JavaScript · Jira · Jenkins · .NET · SQL",
				},
				{
					hash: "0000f01",
					date: "feb 2013 — jul 2018",
					role: "Junior Development Engineer",
					context: "Retail / fashion sector — Bogotá, Colombia",
					bullets: [
						"Recognized by executive management for participation in the SAP implementation project.",
						"Designed and implemented integrations between SAP and legacy systems.",
						"Developed integrations with Redeban and Credibanco for POS systems in Colombia.",
						"Built .NET applications and mobile solutions for inventory management.",
					],
					tools: ".NET · SQL Server · Git · SAP Integrations",
				},
			],
		},

		certifications: {
			title: "Credentials",
			items: [
				{
					name: "Salesforce Certified Platform App Builder",
					date: "Issued February 26, 2026",
					gold: false,
					tag: "app builder",
				},
				{
					name: "Salesforce Certified Platform Developer I",
					date: "Issued August 26, 2022",
					gold: false,
					tag: "developer I",
				},
				{
					name: "Scrum Fundamentals Certified (SFC)",
					date: "Issued February 23, 2020",
					gold: true,
					tag: "fundamentals",
				},
			],
		},

		education: {
			title: "Academic background",
			degree: "Bachelor in Systems Engineering",
			school: "Universidad Piloto de Colombia — Bogotá, Colombia",
			date: "Graduated November 2013",
		},

		contact: {
			title: "Let's work together",
			dek: "Available for Salesforce solution design, development, integration, and implementation projects, bringing senior-level technical expertise and leadership.",
			leadConsole: "fill in the details and send",
			linkedinLabel: "linkedin",
			githubLabel: "github",
			locationLabel: "location",
			locationValue: "Bogotá, Colombia",
			note: "",
		},

		footer: {
			rights: "Salesforce Certified Systems Engineer.",
			backTop: "Back to top ↑",
		},

		toggle: {
			lang: "Language",
			style: "Style",
			console: "Console",
			corporate: "Corporate",
		},
	},

	es: {
		nav: {
			about: "Acerca de",
			skills: "Habilidades",
			experience: "Experiencia",
			certifications: "Certificaciones",
			education: "Educación",
			contact: "Contacto",
		},

		hero: {
			role: "Salesforce Certified Systems Engineer",
			name: "Jose Alexander Salamanca Lozano",
			terminal: {
				whoami: "whoami",
				catCmd: "cat resumen.txt",
				lines: [
					"// 12 años construyendo soluciones sobre la plataforma Salesforce:",
					"// Apex, LWC, Flows, integraciones y automatización de procesos.",
					"// Metodologías Agile (SCRUM) · .NET · PHP · infraestructura empresarial.",
				],
			},
			statement:
				"Entregando soluciones empresariales de Salesforce en Colombia, México, Perú, Argentina, Estados Unidos y Asia-Pacífico durante más de una década — desde arquitectura de plataforma y desarrollo Apex hasta automatización con IA usando Agentforce.",
			ctaDownload: "Descargar CV (PDF)",
			ctaDownloadOther: "También disponible en inglés (PDF)",
			ctaContact: "Contactar",
			ctaExperience: "Ver experiencia",
			stats: [
				{ num: "12", label: "años de experiencia" },
				{ num: "8", label: "proyectos / releases" },
				{ num: "3", label: "certificaciones Salesforce" },
			],
			profileFacts: [
				{ label: "Experiencia", value: "12 años" },
				{ label: "Certificaciones", value: "3 vigentes" },
				{ label: "Idiomas", value: "Español (nativo) · Inglés (B1+)" },
				{ label: "Ubicación", value: "Bogotá, Colombia" },
			],
		},

		about: {
			title: "Perfil profesional",
			paragraphs: [
				"Ingeniero de Sistemas certificado en Salesforce, con <strong>12 años de experiencia</strong> en proyectos de TI, especializado en desarrollo e integraciones sobre la plataforma Salesforce. Sólida experiencia en análisis, diseño, desarrollo e implementación de sistemas bajo metodologías ágiles (SCRUM).",
				"Su trayectoria incluye desarrollo con <strong>Salesforce, .NET y PHP</strong>, además de experiencia en infraestructura tecnológica y soluciones empresariales para clientes en Colombia, México, Perú, Argentina, Estados Unidos y Asia-Pacífico.",
			],
			softSkillsTitle: "Competencias clave",
			softSkills: [
				"Resolución de problemas",
				"Liderazgo y ownership",
				"Comunicación efectiva",
				"Trabajo en equipo",
				"Adaptabilidad",
				"Gestión del tiempo",
				"Atención al detalle",
			],
			languagesTitle: "Idiomas",
			languages: [
				{ name: "Español", level: "Nativo", cls: "native" },
				{ name: "Inglés", level: "Intermedio · B1+", cls: "mid" },
			],
		},

		skills: {
			title: "Competencias técnicas",
			jsonPreview: {
				platform: "Salesforce",
				role: "Senior Developer",
				years: 12,
			},
			technicalTitle: "Skills técnicas",
			technical: [
				"Apex",
				"Lightning Web Components",
				"Aura Components",
				"Triggers",
				"Flows",
				"Jobs · Batch & Schedule",
				"Visualforce",
				"SOQL",
				"REST API",
				"JavaScript",
				"Agentforce",
				"Git / Bitbucket",
				"Jenkins",
				"Jira",
				"Visual Studio Code",
			],
			complementaryTitle: "Stack complementario",
			complementary: [
				".NET",
				"SQL Server",
				"PHP",
				"SOAP",
				"JSON",
				"SAP Integrations",
			],
			tableRows: [
				{
					label: "Desarrollo Salesforce",
					items:
						"Apex · Triggers · Flows · Jobs (Batch & Schedule) · Visualforce · Lightning Web Components · Aura Components · SOQL · REST API · Agentforce",
				},
				{
					label: "Lenguajes y frameworks",
					items: "JavaScript · .NET · PHP · SQL Server · JSON",
				},
				{
					label: "Integración y despliegue",
					items: "SOAP · SAP Integrations · Git / Bitbucket · Jenkins",
				},
				{
					label: "Herramientas y proceso",
					items: "Jira · Visual Studio Code · Metodología Agile / SCRUM",
				},
			],
		},

		experience: {
			title: "Registro de experiencia",
			lede: "historial de releases profesionales",
			dek: "Registro cronológico de proyectos profesionales, del más reciente al más antiguo.",
			items: [
				{
					hash: "7f3a1c2",
					date: "mar 2026 — actual",
					role: "Senior Salesforce Developer",
					context:
						"Consultora de tecnología · Cliente del sector salud/seguros — Argentina",
					bullets: [
						"Desarrollo e implementación de soluciones con Apex, Flows, Platform Events e Invocable Actions para automatizar procesos de negocio.",
						"Configuración y mejora continua del agente Agentforce: nuevas Actions, actualización de prompts/instrucciones y optimización de su comportamiento.",
						"Soporte al proceso de asignación Round Robin de Leads, garantizando distribución equitativa entre asesores comerciales y notificaciones automáticas.",
						"Optimización de consultas SOQL, procesos asíncronos y lógica Apex aplicando buenas prácticas y Governor Limits.",
						"Desarrollo de pruebas unitarias, documentación técnica y soporte funcional/técnico junto a Negocio, QA y Product Owner.",
					],
					tools:
						"Apex · Agentforce · SOQL · Lightning Flow · Platform Events · Invocable Actions · Git · SFDX · Jira",
				},
				{
					hash: "4d08b91",
					date: "jul 2025 — dic 2025",
					role: "Senior Salesforce Developer",
					context:
						"Consultora de tecnología · Cliente del sector retail — México",
					bullets: [
						"Diseño e implementación de una solución end-to-end para subir archivos a Apigee desde múltiples canales (LWC, REST APIs, Apex), reduciendo lógica duplicada.",
						"Desarrollo y exposición de servicios RESTful para proveedores externos, con integraciones seguras y trazabilidad transaccional.",
						"Implementación de Apex Triggers para la asignación automática de órdenes de trabajo a proveedores según reglas de negocio complejas.",
						"Clases de servicio Apex para consumo de sistemas externos y actualización de órdenes y productos relacionados.",
						"Liderazgo en actividades de implementación en DEV, Staging y UAT, trabajando bajo metodología SCRUM con Jira.",
					],
					tools:
						"Salesforce Field Service · Apex · SOQL · LWC · REST API · Triggers · Git/Bitbucket · Jenkins · Jira",
				},
				{
					hash: "9e21fa0",
					date: "mar 2025 — abr 2025",
					role: "Senior Salesforce Developer",
					context:
						"Consultora de tecnología · Cliente del sector automotriz — México",
					bullets: [
						"Adaptación y personalización de módulos de incentivos comerciales para una marca del sector automotriz.",
						"Refactorización y optimización de componentes existentes para mejorar rendimiento y mantenibilidad.",
						"Implementación de mejoras solicitadas por negocio en Aura Components y Apex.",
						"Gestión de configuración de datos: objetos, campos, relaciones y automatización con Flows.",
					],
					tools:
						"Salesforce · Apex · SOQL · Flows · Aura Components · Visual Studio Code",
				},
				{
					hash: "c76a552",
					date: "ene 2025 — feb 2025",
					role: "Senior Salesforce Developer",
					context: "Consultora de tecnología · Cliente internacional — México",
					bullets: [
						"Desarrollo de clases Apex para sistemas de agent-force que soportan procesos de búsqueda de origen y destino.",
						"Configuración del modelo de datos de Salesforce: objetos, campos, relaciones y permisos.",
						"Aseguramiento de la calidad de la solución mediante buen uso de SOQL y buenas prácticas de la plataforma.",
					],
					tools: "Salesforce · Apex · SOQL · Flows",
				},
				{
					hash: "02f6cd8",
					date: "mar 2024 — dic 2024",
					role: "Senior Salesforce Developer",
					context:
						"Consultora de tecnología · Cliente del sector bancario — Perú",
					bullets: [
						"Desarrollo de nuevos componentes y funcionalidades para una calculadora de precios usada por el negocio.",
						"Desarrollo de jobs batch y programados para actualizar datos según reglas de negocio.",
						"Mejora y mantenimiento de desarrollos internos de Salesforce alineados con requerimientos bancarios.",
						"Soporte a personalizaciones existentes y mejora continua; gestión de datos, objetos y seguridad.",
					],
					tools: "Salesforce · Apex · SOQL · Flows",
				},
				{
					hash: "b834e17",
					date: "feb 2023 — mar 2024",
					role: "Senior Salesforce Developer",
					context: "Sector financiero / crédito — Colombia",
					bullets: [
						"Desarrollo de soluciones Salesforce para automatizar el proceso de Ratificación de Crédito.",
						"Implementación de integraciones con sistemas legados usando SOAP y REST APIs.",
						"Soporte y optimización de personalizaciones existentes (Visualforce, Batch and Schedule jobs).",
						"Migración de múltiples páginas de Salesforce Classic a Lightning Experience.",
					],
					tools:
						"Salesforce · Apex · SOQL · Visualforce · SOAP · REST API · Git",
				},
				{
					hash: "5a1908c",
					date: "nov 2018 — feb 2023",
					role: "Senior Software Development Engineer",
					context:
						"Sector educación / idiomas — operación multi-país (LATAM y APAC)",
					bullets: [
						"Soporte y mejora de personalizaciones Salesforce en múltiples países (LATAM y APAC).",
						"Desarrollo de soluciones con Lightning Web Components, Apex, Visualforce y pruebas unitarias.",
						"Gestión de tareas y releases con Jira, Git/Bitbucket, Jenkins y Visual Studio Code.",
						"Migraciones de datos para orgs de Salesforce en EE.UU., Hong Kong, Corea, Japón, Tailandia y Singapur.",
						"Desarrollo y optimización de páginas de Experience Cloud y soluciones empresariales con .NET y SQL.",
					],
					tools:
						"Salesforce · LWC · Apex · Visualforce · JavaScript · Jira · Jenkins · .NET · SQL",
				},
				{
					hash: "0000f01",
					date: "feb 2013 — jul 2018",
					role: "Junior Development Engineer",
					context: "Sector retail / moda — Bogotá, Colombia",
					bullets: [
						"Reconocido por la gerencia ejecutiva por su participación en el proyecto de implementación SAP.",
						"Diseño e implementación de integraciones entre SAP y sistemas legados.",
						"Desarrollo de integraciones con Redeban y Credibanco para sistemas POS en Colombia.",
						"Construcción de aplicaciones .NET y soluciones móviles para gestión de inventario.",
					],
					tools: ".NET · SQL Server · Git · SAP Integrations",
				},
			],
		},

		certifications: {
			title: "Certificaciones",
			items: [
				{
					name: "Salesforce Certified Platform App Builder",
					date: "Emitida: 26 febrero 2026",
					gold: false,
					tag: "app builder",
				},
				{
					name: "Salesforce Certified Platform Developer I",
					date: "Emitida: 26 agosto 2022",
					gold: false,
					tag: "developer I",
				},
				{
					name: "Scrum Fundamentals Certified (SFC)",
					date: "Emitida: 23 febrero 2020",
					gold: true,
					tag: "fundamentals",
				},
			],
		},

		education: {
			title: "Formación académica",
			degree: "Ingeniería de Sistemas",
			school: "Universidad Piloto de Colombia — Bogotá, Colombia",
			date: "Graduación: noviembre 2013",
		},

		contact: {
			title: "Trabajemos juntos",
			dek: "Disponible para participar en proyectos de diseño, desarrollo, integración e implementación de soluciones Salesforce, aportando experiencia técnica y liderazgo como profesional sénior.",
			leadConsole: "completa los datos y envía",
			linkedinLabel: "linkedin",
			githubLabel: "github",
			locationLabel: "ubicación",
			locationValue: "Bogotá, Colombia",
			note: "",
		},

		footer: {
			rights: "Salesforce Certified Systems Engineer.",
			backTop: "↑ volver arriba",
		},

		toggle: {
			lang: "Idioma",
			style: "Estilo",
			console: "Consola",
			corporate: "Corporativo",
		},
	},
};
