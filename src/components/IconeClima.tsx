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

  const getClimaIcone = (condition: string): string => {
    const iconMap: Record<string, string> = {
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

    return iconMap[condition] || 'default.png';
  };

  // Use a função para obter o nome da imagem com base nas condições climáticas
  const diaIcone = getClimaIcone(text_icon.icon.dawn);
  console.log('icone', text_icon);

  return (
    <EstiloCard>
      <img
        src={`/assets/Img/condicoes-climaticas/${diaIcone}`}
        alt="Icone Clima"
      />
    </EstiloCard>
  );
};

export default ClimaIcone;
