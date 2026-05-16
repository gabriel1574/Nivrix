export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivrix.com";

export const navGroups = [
  {
    label: "Plataforma",
    href: "/plataforma",
    links: [
      { href: "/plataforma/checkout", label: "Checkout de Alta Conversao" },
      { href: "/plataforma/api", label: "API de Pagamentos" },
      { href: "/plataforma/seguranca", label: "Seguranca e Confiabilidade" },
      { href: "/plataforma/gestao", label: "Gestao de Vendas" },
    ],
  },
  {
    label: "Legal",
    href: "/legal",
    links: [
      { href: "/legal/termos-de-uso", label: "Termos de Uso" },
      { href: "/legal/termos-de-servico", label: "Termos de Servico" },
      { href: "/legal/politica-de-privacidade", label: "Politica de Privacidade" },
      { href: "/legal/politica-de-cookies", label: "Politica de Cookies" },
      { href: "/legal/seguranca", label: "Politica de Seguranca" },
    ],
  },
  {
    label: "Institucional",
    href: "/institucional",
    links: [
      { href: "/institucional/sobre", label: "Sobre a Nivrix" },
      { href: "/institucional/trabalhe-conosco", label: "Trabalhe Conosco" },
      { href: "/institucional/imprensa", label: "Nivrix na Midia" },
      { href: "/institucional/asg", label: "ASG" },
    ],
  },
  {
    label: "Contato",
    href: "/contato",
    links: [],
  },
];

export const pageThemes = {
  plataforma: {
    className: "theme-platform",
    image: "/assets/nivrix-dashboard-hero.webp",
  },
  legal: {
    className: "theme-legal",
    image: "/assets/nivrix-docs-legal-hero.webp",
  },
  institucional: {
    className: "theme-institutional",
    image: "/assets/nivrix-team-hero.webp",
  },
  contato: {
    className: "theme-contact",
    image: "/assets/nivrix-support-payments.webp",
  },
};

export const pageImages = {
  "/plataforma": "/assets/nivrix-dashboard-hero.webp",
  "/plataforma/checkout": "/assets/nivrix-ecommerce-payments.webp",
  "/plataforma/api": "/assets/nivrix-api-hero.webp",
  "/plataforma/seguranca": "/assets/nivrix-legal-security-unique-hero.webp",
  "/plataforma/gestao": "/assets/nivrix-dashboard-hero.webp",
  "/legal": "/assets/nivrix-docs-legal-hero.webp",
  "/legal/termos-de-uso": "/assets/nivrix-use-terms-unique-hero.webp",
  "/legal/termos-de-servico": "/assets/nivrix-service-terms-unique-hero.webp",
  "/legal/politica-de-privacidade": "/assets/nivrix-privacy-legal-hero.webp",
  "/legal/politica-de-cookies": "/assets/nivrix-docs-legal-hero.webp",
  "/legal/seguranca": "/assets/nivrix-legal-security-unique-hero.webp",
  "/institucional": "/assets/nivrix-team-hero.webp",
  "/institucional/sobre": "/assets/nivrix-about-unique-hero.webp",
  "/institucional/trabalhe-conosco": "/assets/nivrix-careers-unique-hero.webp",
  "/institucional/imprensa": "/assets/nivrix-press-hero.webp",
  "/institucional/asg": "/assets/nivrix-asg-legal-hero.webp",
  "/contato": "/assets/nivrix-support-payments.webp",
};

export const pages = {
  "/plataforma": {
    eyebrow: "Plataforma",
    title: "Pagamentos digitais organizados para vender com mais fluidez.",
    description:
      "Conheca os modulos da Nivrix para checkout, API, seguranca e acompanhamento de vendas online.",
    sections: [
      ["Checkout", "Uma experiencia de compra clara, responsiva e criada para reduzir abandono."],
      ["Integracao", "Base tecnica simples para conectar lojas, infoprodutos, SaaS e sistemas proprios."],
      ["Controle", "Visao sobre pagamentos, aprovacao e operacao para tomar decisoes com mais confianca."],
    ],
  },
  "/plataforma/checkout": {
    eyebrow: "Checkout",
    title: "Checkout de alta conversao para negocios digitais.",
    description:
      "Uma jornada de pagamento objetiva, moderna e pensada para manter o comprador avancando ate a aprovacao.",
    sections: [
      ["Menos atrito", "Campos claros, fluxo direto e experiencia visual alinhada a marcas digitais."],
      ["Mobile first", "Pagamento confortavel para usuarios que compram pelo celular."],
      ["Confiança", "Uma interface premium que ajuda o cliente a se sentir seguro para finalizar."],
    ],
  },
  "/plataforma/api": {
    eyebrow: "API",
    title: "API de pagamentos para conectar sua operacao.",
    description:
      "Estrutura pensada para integrar vendas online, produtos digitais, assinaturas e plataformas proprias.",
    sections: [
      ["Conexao simples", "Integre canais de venda sem transformar pagamento em gargalo tecnico."],
      ["Escalabilidade", "Base preparada para rotinas digitais com maior volume e recorrencia."],
      ["Visibilidade", "Dados organizados para acompanhar transacoes e comportamento de compra."],
    ],
  },
  "/plataforma/seguranca": {
    eyebrow: "Seguranca",
    title: "Confiabilidade para vender todos os dias.",
    description:
      "A Nivrix reforca a experiencia de pagamento com comunicacao segura, operacao clara e foco em protecao.",
    sections: [
      ["Operacao protegida", "Processos pensados para reduzir riscos e dar previsibilidade ao negocio."],
      ["Marca confiavel", "Visual e linguagem que transmitem seguranca no momento decisivo da compra."],
      ["Acompanhamento", "Sinais claros para entender pagamentos, aprovacoes e pontos de atencao."],
    ],
  },
  "/plataforma/gestao": {
    eyebrow: "Gestao",
    title: "Acompanhe vendas, aprovacoes e crescimento.",
    description:
      "Controle a rotina de pagamentos com mais clareza, da venda aprovada ao acompanhamento do desempenho.",
    sections: [
      ["Indicadores", "Veja sinais importantes da operacao sem excesso de complexidade."],
      ["Rotina digital", "Organize pagamentos de campanhas, lojas, assinaturas e produtos digitais."],
      ["Decisao", "Tenha mais confianca para ajustar ofertas, canais e experiencia de checkout."],
    ],
  },
  "/legal": {
    eyebrow: "Legal",
    title: "Documentos e politicas da Nivrix.",
    description:
      "Central de informacoes legais para uso da plataforma, privacidade, cookies, seguranca e prestacao de servicos.",
    sections: [
      ["Transparencia", "Documentos criados para deixar responsabilidades e condicoes mais claras."],
      ["Privacidade", "Informacoes sobre tratamento de dados e comunicacao com usuarios."],
      ["Seguranca", "Diretrizes para uma relacao digital mais confiavel."],
    ],
  },
  "/legal/termos-de-uso": {
    eyebrow: "Termos",
    title: "Termos de Uso.",
    description:
      "Regras gerais para acesso, navegacao e uso das paginas e canais digitais da Nivrix.",
    sections: [
      ["Uso adequado", "O usuario deve utilizar os canais da Nivrix de forma licita e responsavel."],
      ["Disponibilidade", "Podemos atualizar conteudos, recursos e condicoes para melhorar a experiencia."],
      ["Atualizacoes", "Esta pagina pode ser revista conforme evolucao dos servicos e necessidades legais."],
    ],
  },
  "/legal/termos-de-servico": {
    eyebrow: "Servicos",
    title: "Termos de Servico.",
    description:
      "Condicoes comerciais e operacionais aplicaveis aos servicos de pagamento oferecidos pela Nivrix.",
    sections: [
      ["Contratacao", "As condicoes especificas podem variar conforme proposta, produto e perfil do negocio."],
      ["Operacao", "Servicos de pagamento dependem de validacoes, integracoes e regras de seguranca."],
      ["Responsabilidades", "Cada parte deve cumprir suas obrigacoes tecnicas, comerciais e regulatorias."],
    ],
  },
  "/legal/politica-de-privacidade": {
    eyebrow: "Privacidade",
    title: "Politica de Privacidade.",
    description:
      "Como a Nivrix trata informacoes para contato, atendimento, seguranca e melhoria da experiencia digital.",
    sections: [
      ["Dados de contato", "Podemos receber nome, e-mail e informacoes enviadas voluntariamente em formularios."],
      ["Finalidade", "Usamos dados para responder solicitacoes, melhorar servicos e proteger a operacao."],
      ["Direitos", "Usuarios podem solicitar informacoes, correcao ou exclusao conforme legislacao aplicavel."],
    ],
  },
  "/legal/politica-de-cookies": {
    eyebrow: "Cookies",
    title: "Politica de Cookies.",
    description:
      "Informacoes sobre tecnologias usadas para melhorar navegacao, seguranca e analise de experiencia.",
    sections: [
      ["Essenciais", "Cookies tecnicos podem ser usados para funcionamento e seguranca do site."],
      ["Analise", "Ferramentas de mensuracao podem ajudar a entender desempenho e melhorar conteudos."],
      ["Controle", "O usuario pode gerenciar preferencias pelo navegador ou configuracoes disponiveis."],
    ],
  },
  "/legal/seguranca": {
    eyebrow: "Seguranca",
    title: "Politica de Seguranca.",
    description:
      "Principios adotados para proteger informacoes, reduzir riscos e fortalecer a confiabilidade digital.",
    sections: [
      ["Protecao", "Tratamos seguranca como parte central da experiencia de pagamento."],
      ["Monitoramento", "Acompanhamos sinais de risco e boas praticas para evoluir a protecao."],
      ["Comunicacao", "Orientacoes importantes podem ser atualizadas para prevenir uso indevido."],
    ],
  },
  "/institucional": {
    eyebrow: "Institucional",
    title: "Uma marca criada para simplificar pagamentos digitais.",
    description:
      "Conheca a Nivrix, sua visao e seus canais institucionais para negocios, talentos, imprensa e impacto.",
    sections: [
      ["Sobre", "Tecnologia, fluidez e confiabilidade para empresas que vendem pela internet."],
      ["Carreiras", "Buscamos pessoas interessadas em construir infraestrutura digital com cuidado."],
      ["Impacto", "Acreditamos em crescimento responsavel, seguranca e relacoes transparentes."],
    ],
  },
  "/institucional/sobre": {
    eyebrow: "Sobre",
    title: "A Nivrix existe para tornar pagamentos digitais mais claros.",
    description:
      "Unimos tecnologia, design e operacao para ajudar marcas digitais a vender com confianca.",
    sections: [
      ["Missao", "Reduzir atrito em pagamentos e fortalecer a experiencia de compra online."],
      ["Visao", "Ser uma base confiavel para empresas digitais, criadores, e-commerces e plataformas."],
      ["Valores", "Clareza, seguranca, fluidez, inovacao e respeito ao usuario final."],
    ],
  },
  "/institucional/trabalhe-conosco": {
    eyebrow: "Carreiras",
    title: "Trabalhe com quem esta construindo pagamentos melhores.",
    description:
      "Estamos interessados em talentos de produto, tecnologia, atendimento, operacoes e crescimento.",
    sections: [
      ["Produto", "Pessoas que entendem experiencia, conversao e necessidades de negocios digitais."],
      ["Tecnologia", "Profissionais que gostam de sistemas confiaveis, simples de integrar e evoluir."],
      ["Atendimento", "Times humanos, claros e preparados para apoiar clientes com agilidade."],
    ],
  },
  "/institucional/imprensa": {
    eyebrow: "Midia",
    title: "Nivrix na midia.",
    description:
      "Informacoes institucionais para comunicacao, imprensa, parcerias e materiais sobre a marca.",
    sections: [
      ["Press kit", "Materiais de marca e informacoes institucionais podem ser solicitados pelo contato."],
      ["Porta-voz", "A Nivrix pode contribuir em pautas sobre pagamento, conversao e negocios digitais."],
      ["Parcerias", "Avaliamos iniciativas alinhadas a tecnologia, confiabilidade e economia digital."],
    ],
  },
  "/institucional/asg": {
    eyebrow: "ASG",
    title: "Crescimento digital com responsabilidade.",
    description:
      "A Nivrix valoriza seguranca, transparencia, diversidade e impacto positivo na economia digital.",
    sections: [
      ["Ambiental", "Priorizamos operacoes digitais eficientes e uso consciente de recursos."],
      ["Social", "Apoiamos negocios digitais que ampliam oportunidades para empreendedores e criadores."],
      ["Governanca", "Buscamos processos claros, seguranca da informacao e melhoria continua."],
    ],
  },
  "/contato": {
    eyebrow: "Contato",
    title: "Fale com a Nivrix.",
    description:
      "Entre em contato para conversar sobre checkout, integracao, vendas digitais e operacao de pagamentos.",
    sections: [
      ["Comercial", "Solicite uma conversa para entender como a Nivrix pode apoiar seu negocio."],
      ["Suporte", "Clientes e parceiros podem direcionar duvidas operacionais pelos canais oficiais."],
      ["Parcerias", "Conte sobre sua plataforma, comunidade ou operacao digital."],
    ],
  },
};

export const legalDocuments = {
  "/legal": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Esta central reúne os documentos legais da Nivrix para orientar o uso do site, dos canais digitais e das soluções de pagamento apresentadas pela marca.",
    sections: [
      {
        title: "Documentos disponíveis",
        body: [
          "Os documentos desta central incluem Termos de Uso, Termos de Serviço, Política de Privacidade, Política de Cookies e Política de Segurança. Cada página detalha uma parte da relação entre a Nivrix, visitantes, clientes, parceiros e usuários dos canais digitais.",
          "A leitura destes documentos ajuda a entender responsabilidades, limites de uso, tratamento de dados, preferências de cookies e práticas de segurança aplicáveis à experiência digital da Nivrix.",
        ],
      },
      {
        title: "Atualizações",
        body: [
          "A Nivrix pode revisar estes documentos para refletir mudanças em seus serviços, exigências legais, melhorias operacionais ou novas práticas de segurança. Quando isso ocorrer, a data de atualização poderá ser alterada nesta central ou no documento correspondente.",
        ],
      },
      {
        title: "Contato",
        body: [
          "Dúvidas sobre estes documentos podem ser encaminhadas pelos canais oficiais de contato da Nivrix. Ao continuar usando o site e os canais digitais, o usuário declara estar ciente das condições aplicáveis.",
        ],
      },
    ],
  },
  "/legal/termos-de-uso": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Estes Termos de Uso regulam o acesso e a navegação no site, páginas, conteúdos e canais digitais da Nivrix.",
    sections: [
      {
        title: "1. Aceitação dos termos",
        body: [
          "Ao acessar ou utilizar o site da Nivrix, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com qualquer condição, deve interromper a navegação e não utilizar os canais digitais disponibilizados.",
          "O uso contínuo do site após eventuais atualizações destes termos será interpretado como ciência e aceitação das novas condições.",
        ],
      },
      {
        title: "2. Uso permitido",
        body: [
          "O site deve ser utilizado de forma lícita, ética e compatível com sua finalidade informativa e comercial. O usuário compromete-se a não praticar atos que prejudiquem a segurança, disponibilidade, reputação ou funcionamento da Nivrix.",
          "É proibido tentar acessar áreas restritas, explorar vulnerabilidades, copiar conteúdos de forma indevida, interferir em sistemas, enviar códigos maliciosos ou utilizar os canais da Nivrix para fins fraudulentos.",
        ],
      },
      {
        title: "3. Conteúdo e propriedade intelectual",
        body: [
          "Textos, imagens, marcas, elementos visuais, layouts, nomes, ícones e demais conteúdos presentes no site pertencem à Nivrix ou são utilizados mediante autorização, licença ou direito aplicável.",
          "Nenhum conteúdo pode ser copiado, reproduzido, distribuído, modificado ou explorado comercialmente sem autorização prévia e expressa da Nivrix, exceto quando permitido pela legislação vigente.",
        ],
      },
      {
        title: "4. Informações do site",
        body: [
          "A Nivrix busca manter informações claras e atualizadas, mas conteúdos podem ser ajustados, removidos ou substituídos a qualquer momento. Informações comerciais, técnicas ou institucionais apresentadas no site não substituem propostas, contratos ou comunicações formais.",
          "Eventuais descrições de recursos, benefícios ou funcionalidades podem depender de disponibilidade, análise, contratação, integração técnica e condições específicas aplicáveis a cada cliente.",
        ],
      },
      {
        title: "5. Links e serviços de terceiros",
        body: [
          "O site pode conter links ou integrações com serviços de terceiros. A Nivrix não controla sites externos e não se responsabiliza por conteúdos, políticas, práticas de privacidade ou segurança de terceiros.",
          "O usuário deve revisar os termos e políticas dos serviços externos antes de fornecer dados ou realizar qualquer operação fora do ambiente da Nivrix.",
        ],
      },
      {
        title: "6. Limitação de responsabilidade",
        body: [
          "A Nivrix não se responsabiliza por danos decorrentes de uso indevido do site, indisponibilidades temporárias, falhas de conexão, eventos fora de seu controle, ação de terceiros ou informações fornecidas incorretamente pelo usuário.",
          "Nada nestes termos limita direitos que não possam ser restringidos pela legislação aplicável.",
        ],
      },
      {
        title: "7. Alterações",
        body: [
          "A Nivrix poderá alterar estes Termos de Uso a qualquer momento para refletir melhorias, mudanças legais, novas funcionalidades ou ajustes operacionais. A versão vigente será aquela publicada nesta página.",
        ],
      },
      {
        title: "8. Foro e legislação",
        body: [
          "Estes termos são regidos pela legislação brasileira. Eventuais controvérsias serão tratadas conforme as regras aplicáveis, sem prejuízo de direitos legais do usuário.",
        ],
      },
    ],
  },
  "/legal/termos-de-servico": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Estes Termos de Serviço descrevem condições gerais aplicáveis às soluções, integrações e serviços de pagamento disponibilizados pela Nivrix.",
    sections: [
      {
        title: "1. Objeto",
        body: [
          "A Nivrix oferece soluções relacionadas a pagamentos digitais, checkout, integração, acompanhamento de vendas e recursos de apoio a negócios online. As condições específicas de cada serviço poderão ser detalhadas em proposta, contrato, painel, documentação técnica ou instrumento próprio.",
          "Estes termos funcionam como base geral e não substituem contratos específicos celebrados com clientes, parceiros ou fornecedores.",
        ],
      },
      {
        title: "2. Elegibilidade e contratação",
        body: [
          "A contratação dos serviços poderá depender de análise cadastral, validação de informações, avaliação de risco, aceite de condições comerciais e cumprimento de requisitos técnicos, operacionais e legais.",
          "A Nivrix poderá recusar, suspender ou encerrar o fornecimento de serviços quando houver inconsistências, indícios de fraude, uso indevido, descumprimento contratual ou impedimentos legais/regulatórios.",
        ],
      },
      {
        title: "3. Obrigações do cliente",
        body: [
          "O cliente deve fornecer informações verdadeiras, manter seus dados atualizados, utilizar os serviços de forma lícita, preservar credenciais de acesso e cumprir leis aplicáveis ao seu negócio, incluindo regras fiscais, consumeristas, de privacidade e prevenção a fraudes.",
          "Também é responsabilidade do cliente garantir que seus produtos, ofertas, páginas, promessas comerciais e canais de venda estejam em conformidade com a legislação e com boas práticas de mercado.",
        ],
      },
      {
        title: "4. Integrações e disponibilidade",
        body: [
          "Serviços de pagamento dependem de infraestrutura tecnológica, redes, instituições, provedores, adquirentes, emissores, bancos, plataformas e outros participantes. Por isso, podem ocorrer indisponibilidades, atrasos, manutenções ou falhas fora do controle direto da Nivrix.",
          "A Nivrix poderá realizar manutenções, atualizações e ajustes técnicos para preservar segurança, desempenho e estabilidade dos serviços.",
        ],
      },
      {
        title: "5. Segurança e prevenção a riscos",
        body: [
          "A Nivrix poderá adotar mecanismos de monitoramento, validação, bloqueio, retenção, revisão ou análise de transações quando necessário para mitigar riscos, prevenir fraudes, atender exigências legais ou proteger usuários e clientes.",
          "O cliente reconhece que determinadas operações podem ser recusadas, revisadas ou condicionadas a verificações adicionais.",
        ],
      },
      {
        title: "6. Valores, repasses e condições comerciais",
        body: [
          "Taxas, prazos, limites, repasses e condições financeiras serão definidos em proposta, contrato ou ambiente aplicável. Tais condições podem variar conforme produto contratado, perfil do cliente, volume, risco, canais utilizados e regras de parceiros envolvidos.",
          "A Nivrix poderá atualizar condições comerciais mediante comunicação ou conforme previsto em contrato específico.",
        ],
      },
      {
        title: "7. Suspensão e encerramento",
        body: [
          "Os serviços podem ser suspensos ou encerrados em caso de descumprimento de condições, suspeita de fraude, risco elevado, ordem de autoridade competente, ausência de documentação, violação de políticas ou uso incompatível com a finalidade dos serviços.",
        ],
      },
      {
        title: "8. Disposições gerais",
        body: [
          "Estes Termos de Serviço devem ser interpretados em conjunto com propostas, contratos, políticas, documentação técnica e comunicações oficiais da Nivrix. Em caso de conflito, o instrumento específico poderá prevalecer, conforme o caso.",
        ],
      },
    ],
  },
  "/legal/politica-de-privacidade": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Esta Política de Privacidade explica como a Nivrix pode coletar, utilizar, armazenar, proteger e compartilhar dados pessoais em seus canais digitais.",
    sections: [
      {
        title: "1. Dados que podemos coletar",
        body: [
          "Podemos coletar dados fornecidos diretamente pelo usuário, como nome, e-mail, telefone, empresa, tipo de negócio, mensagem enviada em formulários e informações necessárias para atendimento comercial ou suporte.",
          "Também podemos coletar dados técnicos de navegação, como endereço IP, identificadores de dispositivo, navegador, páginas acessadas, data e horário de acesso, origem de tráfego e interações com o site.",
        ],
      },
      {
        title: "2. Finalidades de uso",
        body: [
          "Utilizamos dados pessoais para responder solicitações, prestar atendimento, apresentar soluções, melhorar a experiência do site, proteger a segurança dos canais digitais, cumprir obrigações legais e analisar desempenho de campanhas e conteúdos.",
          "Quando aplicável, dados também podem ser utilizados para comunicações comerciais relacionadas à Nivrix, sempre observando preferências do usuário e bases legais pertinentes.",
        ],
      },
      {
        title: "3. Bases legais",
        body: [
          "O tratamento de dados pode ocorrer com base em consentimento, execução de contrato ou procedimentos preliminares, cumprimento de obrigação legal ou regulatória, legítimo interesse, exercício regular de direitos e outras bases previstas na Lei Geral de Proteção de Dados.",
        ],
      },
      {
        title: "4. Compartilhamento",
        body: [
          "A Nivrix pode compartilhar dados com fornecedores de tecnologia, hospedagem, atendimento, análise, segurança, comunicação, parceiros necessários à operação e autoridades públicas quando exigido por lei ou ordem válida.",
          "Buscamos limitar o compartilhamento ao necessário para cumprir finalidades legítimas e preservar a proteção das informações.",
        ],
      },
      {
        title: "5. Segurança e retenção",
        body: [
          "Adotamos medidas técnicas e organizacionais para proteger dados contra acesso não autorizado, perda, alteração, divulgação indevida ou uso inadequado. Nenhum sistema, porém, é absolutamente imune a riscos.",
          "Os dados serão mantidos pelo tempo necessário ao cumprimento das finalidades informadas, obrigações legais, resolução de disputas, prevenção a fraudes e exercício regular de direitos.",
        ],
      },
      {
        title: "6. Direitos do titular",
        body: [
          "Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento, revisão de decisões automatizadas e revogação de consentimento, quando aplicável.",
          "Solicitações podem exigir validação de identidade para proteção do próprio titular.",
        ],
      },
      {
        title: "7. Transferências internacionais",
        body: [
          "Alguns fornecedores ou serviços utilizados pela Nivrix podem processar dados fora do Brasil. Nesses casos, buscamos adotar salvaguardas compatíveis com a legislação aplicável e práticas razoáveis de proteção.",
        ],
      },
      {
        title: "8. Contato",
        body: [
          "Dúvidas ou solicitações sobre privacidade podem ser enviadas pelos canais oficiais da Nivrix. Esta política poderá ser atualizada para refletir melhorias, alterações legais ou mudanças operacionais.",
        ],
      },
    ],
  },
  "/legal/politica-de-cookies": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Esta Política de Cookies explica como a Nivrix utiliza cookies e tecnologias semelhantes em seu site.",
    sections: [
      {
        title: "1. O que são cookies",
        body: [
          "Cookies são pequenos arquivos armazenados no navegador ou dispositivo do usuário quando ele acessa um site. Eles podem permitir funcionamento técnico, lembrar preferências, melhorar segurança, medir audiência e entender interações com páginas.",
        ],
      },
      {
        title: "2. Tipos de cookies utilizados",
        body: [
          "Cookies essenciais são necessários para funcionamento básico, segurança, navegação e recursos solicitados pelo usuário. Esses cookies podem ser utilizados independentemente de consentimento, quando estritamente necessários.",
          "Cookies de análise podem ajudar a compreender desempenho, origem de tráfego, páginas acessadas e comportamento agregado de navegação. Eles dependem de consentimento quando exigido pela legislação aplicável.",
          "Cookies funcionais podem lembrar escolhas e preferências para melhorar a experiência de navegação. Cookies de marketing, quando usados, podem apoiar mensuração de campanhas e personalização de comunicações.",
        ],
      },
      {
        title: "3. Banner de consentimento",
        body: [
          "Ao acessar o site, o usuário poderá visualizar um banner solicitando decisão sobre cookies. Ao aceitar, a Nivrix poderá registrar essa preferência e utilizar cookies de análise ou recursos semelhantes conforme descrito nesta política.",
          "Ao recusar, apenas cookies essenciais ao funcionamento do site poderão ser utilizados. A preferência poderá ser armazenada para evitar que o banner seja exibido a cada visita.",
        ],
      },
      {
        title: "4. Como gerenciar cookies",
        body: [
          "O usuário pode gerenciar, bloquear ou excluir cookies diretamente nas configurações do navegador. A desativação de determinados cookies pode afetar funcionalidades, preferências salvas ou a experiência de navegação.",
        ],
      },
      {
        title: "5. Tecnologias semelhantes",
        body: [
          "Além de cookies, a Nivrix pode utilizar pixels, armazenamento local, identificadores ou ferramentas similares para segurança, funcionamento, análise e melhoria da experiência, sempre conforme legislação aplicável.",
        ],
      },
      {
        title: "6. Atualizações",
        body: [
          "Esta política pode ser atualizada para refletir mudanças nos cookies utilizados, novas ferramentas, alterações legais ou melhorias de transparência. A versão vigente será publicada nesta página.",
        ],
      },
    ],
  },
  "/legal/seguranca": {
    updatedAt: "Última atualização: 14 de maio de 2026",
    intro:
      "Esta Política de Segurança apresenta princípios adotados pela Nivrix para proteger seus canais digitais, informações e experiências relacionadas a pagamentos.",
    sections: [
      {
        title: "1. Compromisso com segurança",
        body: [
          "A Nivrix trata segurança como elemento essencial de sua proposta. Buscamos adotar práticas técnicas e organizacionais para preservar confidencialidade, integridade, disponibilidade e confiabilidade dos ambientes digitais.",
        ],
      },
      {
        title: "2. Proteção de informações",
        body: [
          "Informações recebidas pela Nivrix podem ser protegidas por controles de acesso, segregação de permissões, monitoramento, criptografia quando aplicável, registros de atividade e processos internos de segurança.",
          "O acesso a informações deve ocorrer apenas por pessoas ou fornecedores autorizados e conforme necessidade operacional.",
        ],
      },
      {
        title: "3. Prevenção a fraudes",
        body: [
          "Soluções de pagamento podem demandar análises, validações, bloqueios, revisões ou monitoramento de sinais de risco. Essas medidas buscam proteger clientes, compradores, parceiros e a própria operação.",
        ],
      },
      {
        title: "4. Responsabilidades do usuário e cliente",
        body: [
          "Usuários e clientes devem proteger credenciais, utilizar senhas fortes, evitar compartilhamento indevido de acessos, manter dispositivos seguros e informar a Nivrix sobre suspeitas de uso indevido ou incidentes relacionados aos serviços.",
        ],
      },
      {
        title: "5. Incidentes de segurança",
        body: [
          "Em caso de incidente relevante, a Nivrix poderá adotar medidas de contenção, investigação, mitigação, comunicação e melhoria, conforme natureza do evento, impactos identificados e obrigações legais aplicáveis.",
        ],
      },
      {
        title: "6. Melhoria contínua",
        body: [
          "A segurança é um processo contínuo. A Nivrix poderá revisar controles, políticas, fornecedores, práticas de desenvolvimento e procedimentos internos para acompanhar evolução tecnológica, regulatória e operacional.",
        ],
      },
    ],
  },
};

export const pagePaths = ["/", ...Object.keys(pages)];
