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

export const pagePaths = ["/", ...Object.keys(pages)];
