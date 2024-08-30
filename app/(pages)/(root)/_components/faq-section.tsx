"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"

export const FaqSection = () => {
    return (
        <section className="py-10 lg:pt-0 lg:pb-16 px-5 lg:px-10 lg:pl-8 xl:pl-20 2xl:pl-36 w-full">
            <div className="mb-8">
                <h4 className="text-2xl md:text-4xl text-[#526A6E] dark:text-white">
                    Perguntas que são frequentes
                </h4>
                <p className="lg:pl-2 text-base">
                    Perguntas que os usuários já nos fizeram antes.
                </p>
            </div>
            <div>
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            O que é o LinkedIn?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2 text-base">
                                O LinkedIn é uma plataforma de redes sociais voltada para o 
                                mundo profissional. Lançado em 2003, ele se concentra em conectar 
                                profissionais, empresas e oportunidades de emprego. É utilizado 
                                para criar e manter perfis profissionais, compartilhar atualizações 
                                sobre carreiras, buscar e divulgar vagas de emprego, e estabelecer 
                                conexões com outros profissionais da mesma área ou de áreas relacionadas.
                            </p>
                            <p className="mb-2 text-base">
                                Os usuários podem criar um perfil que funciona como um currículo 
                                online, destacando suas habilidades, experiências e conquistas. 
                                Além disso, é possível participar de grupos de discussão, seguir 
                                empresas e influenciadores do setor, e publicar artigos e 
                                atualizações para se engajar com a comunidade profissional. 
                                O LinkedIn também oferece ferramentas para recrutamento, 
                                permitindo que empresas busquem candidatos e publiquem vagas.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Como o LinkedIn pode ser usado?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-6 text-base">
                                O LinkedIn é uma ferramenta que potencializa a visibilidade de
                                empresas, possibilitando que as mesmas compartilhem seus serviços,
                                promovam abertura de vagas, facilitando o networking entre pessoas.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Networking Profissional:</strong> O LinkedIn é uma plataforma eficaz 
                                para construir e manter uma rede de contatos profissionais. 
                                Ele permite que você se conecte com colegas, ex-colegas, líderes 
                                da indústria e outros profissionais, facilitando a troca de 
                                informações e oportunidades.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Desenvolvimento de Carreira:</strong> Profissionais podem usar o 
                                LinkedIn para encontrar oportunidades de emprego, pesquisar empresas e 
                                aprender sobre tendências do setor. A plataforma também permite que você 
                                siga empresas e receba atualizações sobre vagas e novidades no mercado 
                                de trabalho.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Visibilidade e Marca Pessoal:</strong> Um perfil bem elaborado 
                                no LinkedIn pode aumentar sua visibilidade no mercado de trabalho. Ele 
                                funciona como um currículo online, permitindo que você destaque suas 
                                habilidades, conquistas e experiências, além de publicar conteúdo relevante 
                                que ajude a construir sua marca pessoal.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Recrutamento e Contratação:</strong> Para empresas, o LinkedIn 
                                é uma ferramenta valiosa para recrutamento. Ele permite que recrutadores 
                                encontrem candidatos qualificados, publiquem vagas e avaliem perfis 
                                profissionais antes de entrar em contato com possíveis candidatos.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Compartilhamento de Conhecimento:</strong> A plataforma é um ótimo 
                                lugar para compartilhar e acessar conteúdo relevante, como artigos, estudos 
                                de caso e insights de mercado. Participar de discussões e publicar atualizações 
                                pode demonstrar sua expertise e contribuir para sua reputação como especialista 
                                no seu campo.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Aprendizado e Crescimento Profissional:</strong> O LinkedIn Learning 
                                oferece uma ampla gama de cursos e treinamentos que podem ajudar a desenvolver 
                                novas habilidades e a se manter atualizado com as tendências da indústria.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Engajamento com a Comunidade Profissional:</strong> Além de conectar 
                                profissionais, o LinkedIn oferece a oportunidade de se envolver com grupos de 
                                discussão e comunidades focadas em interesses e áreas específicas, permitindo 
                                a troca de conhecimentos e experiências.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Quais as vantagens do LinkedIn Premium?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-6 text-base">
                                O LinkedIn Premium é uma versão paga do LinkedIn que oferece recursos 
                                adicionais em comparação com a versão gratuita, abaixo estão listados
                                os recursos adicionais.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Envie mensagem sem ter conexão:</strong> Permite enviar mensagens diretamente para 
                                outros usuários, mesmo se você não estiver conectado a eles. Isso é 
                                útil para networking e prospecção de candidatos ou clientes.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Saiba quem viu seu perfil:</strong> Você pode ver uma lista 
                                completa de quem visualizou seu perfil, o que pode fornecer insights 
                                valiosos sobre seu alcance e ajudar a identificar oportunidades de conexão.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Informações de empresa:</strong> Acesso a dados detalhados sobre 
                                empresas, como tamanho, crescimento e outras métricas, ajudando na pesquisa 
                                e análise de mercado.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Cursos LinkedIn Learning:</strong> Inclui acesso a uma vasta 
                                biblioteca de cursos e treinamentos sobre uma variedade de tópicos 
                                profissionais, ajudando no desenvolvimento de habilidades e no crescimento 
                                profissional.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Alertas de vagas e insigths:</strong> Receba alertas sobre vagas 
                                de emprego relevantes e veja detalhes adicionais sobre as vagas e empresas, 
                                como informações salariais e o número de candidatos.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Insights de competidores:</strong> Acesso a dados sobre as empresas 
                                concorrentes e como você se compara a outros profissionais na mesma área.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Recomendações de candidatos:</strong> Ferramentas para ajudar recrutadores 
                                a encontrar candidatos mais adequados com base em suas necessidades específicas.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Como utilizar o filtro de vagas do LinkedIn?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-6 text-base">
                                O filtro é uma ferramenta muito poderosa, ele processa milhões
                                de dados utilizando da IA para buscar e obter o máximo
                                de precisão nos resultados, abaixo estão os termos mais 
                                relevantes que auxiliarão em uma busca precisa.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Localização:</strong> Permite que você refine a busca com 
                                base na cidade, estado, país ou até mesmo em opções de trabalho remoto.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Tipo de emprego:</strong> Filtra vagas por tipo de contrato, como 
                                tempo integral, meio período, contrato temporário ou freelance.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Setor:</strong>  Você pode escolher vagas em setores específicos, 
                                como tecnologia, marketing, finanças, servilos, saúde, etc.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Nível de experiência:</strong> Ajusta a busca com base no nível de 
                                experiência requerido, como entrada, júnior, pleno, sênior, especialista.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Data de publicação:</strong> Permite que você veja vagas que foram publicadas 
                                recentemente, ajudando a encontrar as oportunidades mais atuais.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Palavras-chave:</strong> Permite refinar a busca com base em palavras-chave 
                                relacionadas à função, habilidades ou qualificações desejadas.
                            </p>
                            <p className="mb-2 text-base">
                                <strong className="dark:text-zinc-400">Salário:</strong> Em algumas regiões, é possível filtrar vagas com base em 
                                faixas salariais, se essa informação estiver disponível.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}