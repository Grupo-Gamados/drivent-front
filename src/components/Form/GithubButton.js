import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { AiFillGithub } from 'react-icons/ai';
import MuiButton from '@material-ui/core/Button';
import { signInUsingGitHub } from '../../services/githubLoginApi';

async function redirectToGithub() {
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user:email',
    client_id: '30ee3c6e385e1e67e52f',
    redirect_uri: 'http://localhost:3000/sign-in',
  };

  const queryStrings = '?' + new URLSearchParams(params).toString();
  const authURL = `${GITHUB_URL}?${queryStrings}`;
  window.location.href = authURL;
}

export default function GithubButton({ variant = 'contained', children, ...props }) {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  useEffect(async() => {
    if (code) {
      try {
        const userData = await signInUsingGitHub(code);
        setUserData(userData);
        toast('Login realizado com sucesso!');
        navigate('/dashboard/subscription');
      } catch (error) {
        toast('Não foi possível fazer o login!');
      }
    }
  }, []);

  return (
    <StyledMuiButton variant={variant} {...props} onClick={redirectToGithub}>
      <GitHubIcon />
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  background-color: #333333 !important;
`;

const GitHubIcon = styled(AiFillGithub)`
  margin: 0 5px 5px 0;
  font-size: 20px;
  transform: translateY(2px);
`;
