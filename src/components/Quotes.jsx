import { useState, useEffect } from 'react';
import errorImg from '../images/error.png';
import loadingImg from '../images/loading.gif';

function LoadQuotes() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const loadAPI = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'QDztJfyFLJmSs5QsLjxxzQ==77TzIblW8vmx61ZR',
          },
        });
        const result = await res.json();
        setQuote(result[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    loadAPI();
  }, []);

  if (isLoading) {
    return (
      <div className="quote">
        <img src={loadingImg} alt="Quote loading..." />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="quote">
        <img src={errorImg} alt="Quote loading..." />
        <h2>API loading error, please reload the page</h2>
      </div>
    );
  }
  return (
    <div className="quote">
      <blockquote>
        <p>
          {`" ${quote.quote} "`}
        </p>
        <p>
          <strong>
            &mdash;
            {` ${quote.author}`}
          </strong>
        </p>
      </blockquote>
    </div>
  );
}

export default LoadQuotes;
