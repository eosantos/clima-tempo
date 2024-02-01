import { useEffect, useState } from 'react';

const useClima = () => {
  const [climaData, setClimaData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClimaData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_URL;
        const apiToken = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_TOKEN;

        if (!apiUrl || !apiToken) {
          throw new Error('Chaves ou URLs ausentes nas variáveis de ambiente.');
        }

        const response = await fetch(`${apiUrl}?token=${apiToken}`);

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !data.name) {
          throw new Error('Resposta inválida da API');
        }

        setClimaData(data);
      } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error.message);
        setError('Erro ao obter dados meteorológicos');
      } finally {
        setLoading(false);
      }
    };

    fetchClimaData();
  }, []);

  return { climaData, loading, error };
};

export default useClima;
