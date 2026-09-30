import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly menuOpen = signal(false);
  readonly showAllCredentials = signal(false);
  readonly linkedin = 'https://www.linkedin.com/in/claudiomildo-ventura/';
  readonly experiences = [
    {
      company: 'Avanade',
      role: 'Sr. Full-Stack Consultant · Enterprise Technology Leader',
      period: 'JAN 2025 — ATUAL',
      current: true,
      description:
        'Liderança de uma equipe multidisciplinar de 15 profissionais em projetos do setor financeiro. Do mapeamento de processos as-is/to-be à priorização de backlogs, conectando stakeholders e engenharia à entrega.',
      tags: ['Java / Spring Boot', 'Angular', 'Arquitetura Hexagonal', 'Azure / OpenShift'],
      detail:
        'Aplicações desktop com JavaFX, integração com mainframe COBOL CICS, TDD, CI/CD e observabilidade com Dynatrace e SonarQube.',
    },
    {
      company: 'PROVER',
      role: 'Software Consultant · Enterprise & Desktop Apps',
      period: 'OUT 2023 — JAN 2025 · CONTRATO',
      current: false,
      description:
        'Evolução de soluções ERP e WMS, com relatórios de negócio, procedures de banco de dados, integrações fiscais e impressão ZPL.',
      tags: ['TOTVS RM / Cloud', 'Delphi XE10', 'Oracle / PL/SQL'],
      detail:
        'Análise de processos, documentação técnica e desenvolvimento de aplicações empresariais.',
    },
    {
      company: 'Outlier IA',
      role: 'Machine Learning Engineer',
      period: 'JUN 2024 — JAN 2025 · CONTRATO',
      current: false,
      description:
        'Aprimoramento de modelos de inteligência artificial por meio de análise de dados, engenharia de prompts e testes de desempenho, com foco em confiabilidade e qualidade das respostas.',
      tags: ['Inteligência Artificial', 'Prompt Engineering', 'Avaliação de modelos'],
      detail: '',
    },
    {
      company: 'Wipro Limited',
      role: 'Sr. Full-Stack Engineer · Lead IT Consultant',
      period: 'AGO 2022 — DEZ 2024',
      current: false,
      description:
        'Desenvolvimento de microsserviços Java e modernização de aplicações legadas J2EE. APIs REST, modelagem de dados e automação de pipelines de entrega em times Scrum.',
      tags: ['Spring Boot', 'Kafka / RabbitMQ', 'AWS EC2', 'Jenkins'],
      detail:
        'Arquitetura Hexagonal, testes TDD/BDD e integração contínua para aplicações corporativas.',
    },
    {
      company: 'Execom',
      role: 'Sr. Full-Stack Engineer',
      period: 'FEV 2020 — ABR 2022',
      current: false,
      description:
        'Modernização de sistemas Delphi Borland e J2EE para microsserviços Java/Spring Boot. Integração de processos fiscais e evolução de interfaces web.',
      tags: ['Java / Spring Boot', 'Kafka', 'AngularJS', 'Thymeleaf'],
      detail: 'APIs REST, Arquitetura Hexagonal, jQuery e JavaScript.',
    },
  ];
  readonly skills = [
    {
      number: '01',
      title: 'Arquitetura & backend',
      text: 'Sistemas preparados para evoluir.',
      tags: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'Microsserviços',
        'Arquitetura Hexagonal',
        'APIs REST',
        'Kafka',
        'RabbitMQ',
      ],
    },
    {
      number: '02',
      title: 'Full-stack & integração',
      text: 'Do processo de negócio à interface.',
      tags: ['Angular', 'JavaScript', 'JavaFX', 'Delphi', 'Oracle / PL/SQL', 'TOTVS', 'COBOL CICS'],
    },
    {
      number: '03',
      title: 'Cloud & qualidade',
      text: 'Entrega com segurança e visibilidade.',
      tags: [
        'Azure',
        'AWS',
        'OpenShift',
        'CI/CD',
        'Jenkins',
        'TDD / BDD',
        'SonarQube',
        'Dynatrace',
      ],
    },
    {
      number: '04',
      title: 'Liderança & estratégia',
      text: 'Pessoas, tecnologia e negócio alinhados.',
      tags: [
        'Gestão de projetos',
        'Agile / Scrum',
        'Gestão de stakeholders',
        'Transformação digital',
        'Engenharia de prompts',
      ],
    },
  ];
  readonly education = [
    {
      degree: 'MBA em Gestão de Projetos',
      type: 'EM ANDAMENTO',
      date: 'Conclusão prevista · ABR 2027',
    },
    {
      degree: 'Pós-graduação em Cloud Computing, Segurança de Dados e Tecnologia',
      type: 'PÓS-GRADUAÇÃO',
      date: 'DEZ 2024',
    },
    { degree: 'Bacharelado em Sistemas de Informação', type: 'GRADUAÇÃO', date: 'DEZ 2020' },
  ];
  readonly certifications = [
    { title: 'Evolução da Administração', issuer: 'UNINASSAU', date: 'JUL 2026' },
    {
      title: 'Business Design: Inovação em Modelos de Negócios',
      issuer: 'UNINASSAU',
      date: 'JUN 2026',
    },
    { title: 'Artificial Intelligence', issuer: 'UNINASSAU', date: 'SET 2024' },
    { title: 'Cybercrime Expertise', issuer: 'UNINASSAU', date: 'AGO 2024' },
    { title: 'Disaster Recovery', issuer: 'UNINASSAU', date: 'NOV 2023' },
    { title: 'Cryptography', issuer: 'UNINASSAU', date: 'NOV 2023' },
    { title: 'Systems Auditing', issuer: 'UNINASSAU', date: 'NOV 2023' },
    { title: 'Cloud Security', issuer: 'UNINASSAU', date: 'NOV 2023' },
    { title: 'Service-Oriented Solutions Infrastructure', issuer: 'UNINASSAU', date: 'OUT 2023' },
    { title: 'Service-Oriented Solutions Architecture', issuer: 'UNINASSAU', date: 'OUT 2023' },
    { title: 'Cloud Applications', issuer: 'UNINASSAU', date: 'OUT 2023' },
    { title: 'Digital Security', issuer: 'UNINASSAU', date: 'OUT 2023' },
    { title: 'Data Science and Big Data', issuer: 'UNINASSAU', date: 'SET 2023' },
    { title: 'Technology of the Future', issuer: 'UNINASSAU', date: 'AGO 2023' },
  ];
  readonly development = [
    {
      title: 'Full Stack E-Commerce Development with Angular and Java Spring Boot',
      issuer: 'Udemy',
      date: 'JAN 2025',
    },
    {
      title: 'Java Application Migration and Modernization 2024: Solution Engineer Specialist',
      issuer: 'Oracle',
      date: 'NOV 2024',
    },
    {
      title: 'Scalable Java Microservices with Spring Boot and Spring Cloud',
      issuer: 'Google Cloud',
      date: 'OUT 2024',
    },
    {
      title: 'Oracle Cloud Infrastructure Platform: Engineer Specialist and Sales Specialist',
      issuer: 'Oracle',
      date: 'JUL 2024',
    },
    {
      title: 'Oracle Cloud Infrastructure 2024 Generative AI Professional',
      issuer: 'Oracle',
      date: 'JUL 2024',
    },
    {
      title: 'Software Architecture: Complete Professional Guide',
      issuer: 'Udemy',
      date: 'FEV 2024',
    },
    { title: 'Remote Work Success in the Modern Workplace', issuer: 'Udemy', date: 'MAI 2023' },
    {
      title: 'General Personal Data Protection Law in Practice',
      issuer: 'Udemy',
      date: 'SET 2022',
    },
    { title: 'Data Analysis with Python', issuer: 'UNINASSAU', date: 'JAN 2019' },
    { title: 'Documentation in Software Engineering', issuer: 'UNINASSAU', date: 'JAN 2018' },
  ];
  readonly languages = [
    { name: 'Português', level: 'Nativo', code: 'PT' },
    { name: 'Inglês', level: 'Fluente · C1 / C2', code: 'EN' },
    { name: 'Espanhol', level: 'Fluente · C1', code: 'ES' },
    { name: 'Coreano', level: 'Intermediário · B1', code: 'KO' },
  ];

  closeMenu() {
    this.menuOpen.set(false);
  }

  printResume() {
    window.print();
  }
}
