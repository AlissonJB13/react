//css
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>TecSegurança</h2>
      <p>
        Bem-vindo ao <span>TecSegurança</span>, sua plataforma completa para
        gestão de Equipamentos de Proteção Individual (EPIs). Com o
        TecSegurança, sua empresa terá acesso a uma solução eficiente e
        intuitiva para facilitar o processo de solicitação, controle e gestão
        dos EPIs dos colaboradores. Principais recursos do TecSegurança:
      </p>
      <p>
        <span>1. Solicitação Simplificada:</span> Os colaboradores podem
        solicitar os EPIs necessários de forma rápida e fácil através da
        plataforma. Basta alguns cliques para requisitar os equipamentos
        adequados para as suas atividades.
      </p>
      <p>
        <span>2. Controle de Estoque:</span> Mantenha um registro detalhado de
        todos os EPIs disponíveis em estoque. Saiba exatamente quais itens estão
        disponíveis e seus respectivos quantitativos em tempo real.{" "}
      </p>
      <p>
        <span>3. Rastreamento e Localização:</span> Tenha controle total sobre a
        localização dos EPIs. Saiba quem está utilizando, onde estão sendo
        utilizados e quando foram devolvidos.{" "}
      </p>
      <p>
        <span>4. Gestão de Validade:</span> Não se preocupe com EPIs vencidos. O
        TecSegurança oferece uma funcionalidade para acompanhar o prazo de
        validade de cada item, garantindo que os colaboradores sempre estejam
        protegidos com equipamentos em perfeitas condições.{" "}
      </p>
      <p>
        <span>5. (Em breve) Relatórios Personalizados:</span> Acesse relatórios
        detalhados sobre o uso dos EPIs, solicitações pendentes, histórico de
        utilização e muito mais. Tome decisões embasadas em dados concretos para
        otimizar a gestão de segurança da sua empresa.
      </p>
      <p>
        Com o <span>TecSegurança</span>, você terá uma gestão completa e
        eficiente dos Equipamentos de Proteção Individual, garantindo a
        segurança e o bem-estar dos colaboradores. Experimente hoje mesmo e
        simplifique o processo de gestão de EPIs na sua empresa!
      </p>
    </div>
  );
};

export default About;
