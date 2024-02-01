import { useEffect, useState } from 'react';

const useCidade = () => {
  const [nomeCidade, setNomeCidade] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNomeCidade = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_CIDADE_KEY;
        const apiUrl = process.env.NEXT_PUBLIC_API_CIDADE_URL;

        if (!apiKey || !apiUrl) {
          throw new Error('Chaves ou URLs ausentes nas variáveis de ambiente.');
        }

        const response = await fetch(`${apiUrl}?token=${apiKey}`);

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !data.name) {
          throw new Error('Resposta inválida da API');
        }

        setNomeCidade(data.name);
      } catch (error) {
        console.error('Erro ao obter o nome da cidade:', error.message);
        setError('Erro ao obter o nome da cidade');
      } finally {
        setLoading(false);
      }
    };

    fetchNomeCidade();
  }, []);

  return { nomeCidade, loading, error };
};

export default useCidade;
