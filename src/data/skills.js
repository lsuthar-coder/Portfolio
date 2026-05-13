export const SKILLS = {
  'Languages': [
    { name: 'JavaScript', desc: 'Dynamic scripting language. I use it across the stack — React UIs, Node services, and serverless functions on Azure.' },
    { name: 'TypeScript', desc: 'Strongly-typed superset of JavaScript. My default for production code — safer refactors, better tooling, fewer runtime surprises.' },
    { name: 'Java', desc: 'Object-oriented language for enterprise systems. Currently strengthening for Spring Boot backend services and interview prep.' },
    { name: 'Python', desc: 'Versatile scripting language. I reach for it when writing automation, glue scripts, and quick data processing tasks.' },
    { name: 'HTML', desc: 'Semantic markup — the structural foundation of every interface I build. Accessibility starts here.' },
    { name: 'CSS', desc: 'Modern CSS with custom properties, grid, container queries, and motion. I craft responsive, animated UIs without leaning on heavy frameworks.' },
  ],
  'Frameworks & Libraries': [
    { name: 'React', desc: 'Component-driven UI library. My primary frontend tool — used to build Backstage portal plugins and personal projects like this one.' },
    { name: 'Node.js', desc: 'Server-side JavaScript runtime. Powers the microservices and serverless functions on my multi-cloud platform.' },
    { name: 'Express', desc: 'Minimal Node web framework. I use it to build REST APIs, middleware chains, and the api-gateway service.' },
    { name: 'Spring Boot', desc: 'Production-grade Java framework for microservices. Currently studying for backend role transitions.' },
  ],
  'DevOps & Infrastructure': [
    { name: 'Docker', desc: 'Container platform. I containerize every service before pushing to GitHub Container Registry for Helm-based deployment.' },
    { name: 'Kubernetes', desc: 'Container orchestration platform. I run K3s clusters across OCI VMs to host the services on my multi-cloud platform.' },
    { name: 'Jenkins', desc: 'CI/CD automation server. I build pipelines for test, build, and deploy workflows — integrated with cloud-hosted agents.' },
    { name: 'Terraform', desc: 'Infrastructure as Code. I provision the entire OCI + AWS + Azure footprint declaratively, with reproducible state.' },
    { name: 'Ansible', desc: 'Configuration management. I automate VM provisioning, software setup, and post-install steps across cloud nodes.' },
  ],
  'Platforms & Observability': [
    { name: 'Backstage', desc: 'Developer portal framework by Spotify. At GoTo I built a custom Entity Provider, the Feedback Plugin, and UI enhancements.' },
    { name: 'Grafana', desc: 'Observability dashboards. I visualize metrics, logs, and OpenTelemetry traces from multi-cloud services via Grafana Cloud.' },
    { name: 'Prometheus', desc: 'Time-series metrics database. Paired with Grafana for service-health monitoring, SLI tracking, and alerting.' },
  ],
};