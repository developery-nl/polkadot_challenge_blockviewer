import styled from 'styled-components';

export const StyledBlockInfo = styled.div`
background-size: cover !important;
background-position: center !important;
background: #000;
width: 100%;
padding: 40px 20px;
box-sizing: border-box;
animation: animateMovieinfo 1s;

  .blockinfo-content {
    max-width: 1080px;
    min-height: 400px;
    margin: 0 auto;
    background: rgb(10,68,80);
    border-radius: 10px;
    position: relative;

  }

  .blockinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    color: #fff;
    overflow: hidden;
    text-align: center;

    h0 {
      font-family: 'Abel', sans-serif;
      font-size: 68px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 52px !important;
      }
    }

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 28px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h2 {
        font-size: 20px;
        line-height: 0;
        margin-top: 50px;
      }

    h3 {
      font-size: 12px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .blockinfo-search {
    justify-content: center;
  }

  .blockinfo-controls {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }


  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
