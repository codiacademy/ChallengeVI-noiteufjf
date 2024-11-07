import embrapa from '../../img/embrapa.png';
import './projects.css';
export default function Projects() {
  return (
    <section className="container">
      <div>
        <h1 className="page-title">Conheça nossos projetos</h1>
        <h2></h2>
      </div>

      <div className="wrapper">
        <section className="conteudo">
          <div className="photo-gas">
            {/* <img src={zencheck} alt="Gás na Mão" /> */}
          </div>
          <div className="container-text">
            <h3>Gás na Mão</h3>
            <p className="text">
              Criamos uma solução integrada para uma empresa de gás, incluindo
              um aplicativo móvel e uma plataforma web que permitem aos clientes
              realizar compras de forma prática e rápida.
            </p>
            <p className="text">
              Um painel administrativo fornece ao gestor ferramentas para
              monitorar pedidos em tempo real, gerenciar estoque e controlar
              vendas, oferecendo insights que ajudam a otimizar a operação e
              aprimorar a tomada de decisões.
            </p>
          </div>
        </section>

        <section className="conteudo">
          <div className="container-text">
            <h3>Embrapa</h3>
            <p className="text">
              A Empresa Brasileira de Pesquisa Agropecuária Embrapa é uma
              instituição pública de pesquisa vinculada ao Ministério da
              Agricultura, Pecuária e Abastecimento do Brasil. Fundada em 1973,
              a Embrapa tem como missão desenvolver soluções de pesquisa,
              inovação e tecnologia para o setor agropecuário brasileiro,
              visando aumentar a produtividade, a sustentabilidade e a
              competitividade desse setor.
            </p>

            <p className="text">
              Em dezembro de 2023, a Codi Academy venceu uma licitação para a
              construção de um sistema de gestão de produtividade para
              produtores rurais, o software será entregue em até 12 meses.
            </p>
          </div>
          <div className="photo-embrapa">
            <img src={embrapa} alt="embrapa" />
          </div>
        </section>

        <section className="conteudo">
          <div className="photo-restaurante">
            {/* <img src={aleatorio} alt="aleatorio" /> */}
          </div>
          <div className="container-text">
            <h3>Sistema de Controle de Perda de Carne para Restaurantes </h3>
            <p className="text">
              Desenvolvemos uma aplicação web para ajudar restaurantes a
              controlar perdas de carne, reduzindo desperdícios e otimizando o
              estoque. Com autenticação segura e controle de acesso, o sistema
              garante que apenas usuários autorizados gerenciem o inventário.
            </p>
            <p className="text">
              O sistema emite alertas quando os itens estão abaixo do nível
              mínimo recomendado e calcula a perda de carne durante o preparo.
              Essa solução oferece ao restaurante uma visão detalhada do uso e
              desperdício, auxiliando na redução de custos e no planejamento de
              compras.
            </p>
          </div>
        </section>

        <section className="conteudo">
          <div className="container-text">
            <h3>EncontrARTE</h3>
            <p className="text">
              Uma plataforma pensada para ajudar no controle de medicação e
              atividade de idosos, com o objetivo de melhorar a qualidade de
              vida dos pacientes.
            </p>

            <p className="text">
              Foi desenvolvido um app, que permite aos cuidadores dos idosos,
              acompanhar e gerenciar a atividade e a rotina dos pacientes.
            </p>
          </div>
          <div className="photo-encontrarte">
            {/* <img src={encontrarte} alt="encontrarte" /> */}
          </div>
        </section>
      </div>
    </section>
  );
}
