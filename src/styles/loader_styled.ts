import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50dvh;
  gap: 0.5rem;
  color: var(--blue-color);
}

& .loader-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

& .loader-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
}

& .loader-text_words {
  margin: 0;
  padding: 0;
  font-size: clamp(0.8rem, 2vw, 1.5rem);
}

& .loader-text_dots {
  font-size: clamp(0.8rem, 2vw, 1.5rem);
  animation: blink 3s steps(3, start) infinite;
}

@keyframes blink {
  0%,
  20% {
    opacity: 0;
  }
  21%,
  40% {
    opacity: 1;
  }
  41%,
  60% {
    opacity: 0;
  }
  61%,
  80% {
    opacity: 1;
  }
  81%,
  100% {
    opacity: 0;
  }
}

`;

export default StyledLoader;
