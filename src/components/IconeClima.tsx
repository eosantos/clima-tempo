import React from 'react';
import styled from 'styled-components';

interface ClimaIconeProps {
  data: {
    text_icon: {
      icon: {
        dawn: string;
        morning: string;
        afternoon: string;
        night: string;
        day: string;
      };
    };
  };
}

const EstiloCard = styled.div`
  border-radius: 8px;
  padding: 10px 5px 10px 5px;
  margin: 5px;
`;

const ClimaIcone: React.FC<ClimaIconeProps> = ({ data }) => {
  // Verificando se há dados e se a propriedade 'text_icon' existe
  if (!data || !data.text_icon) {
    return null;
  }

  const { text_icon } = data;

  // Obtendo o período do dia atual
  const getPeriodoDoDia = (): 'dawn' | 'morning' | 'afternoon' | 'night' => {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 5 && horaAtual < 12) {
      return 'morning';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      return 'afternoon';
    } else if (horaAtual >= 18 && horaAtual < 21) {
      return 'night';
    } else {
      return 'dawn';
    }
  };
  // Obtendo o período do dia atual
  const periodoAtual = getPeriodoDoDia();

  // Obtendo o ícone correspondente ao período do dia atual
  const iconeAtual = text_icon.icon[periodoAtual];

  // Mapeando a codificação do ícone para o nome do arquivo
  const iconeFileNomeMap: Record<string, string> = {
    '1': '1.png',
    '1n': '1n.png',
    '2': '2.png',
    '2r': '2r.png',
    '2n': '2n.png',
    '2rn': '2rn.png',
    '3': '3.png',
    '3n': '3n.png',
    '4': '4.png',
    '4r': '4r.png',
    '4n': '4n.png',
    '4rn': '4rn.png',
    '4t': '4t.png',
    '4tn': '4tn.png',
    '5': '5.png',
    '5n': '5n.png',
    '6': '6.png',
    '6n': '6ns.png',
    '7': '7.png',
    '7n': '7n.png',
    '8': '8.png',
    '9': '9.png'
  };

  // Obtendo o nome do arquivo do ícone atual
  const iconeAquivoNome = iconeFileNomeMap[iconeAtual];
  console.log('iconeAquivoNome', iconeAquivoNome);

  return (
    <EstiloCard>
      <img
        src={`/assets/Img/condicoes-climaticas/${iconeAquivoNome}`}
        alt="Icone Clima"
      />
    </EstiloCard>
  );
};

export default ClimaIcone;
