import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { AiFillGithub } from 'react-icons/ai';
import MuiButton from '@material-ui/core/Button';
import { signInUsingGitHub } from '../../services/githubLoginApi';

async function redirectToGithub() {
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user',
    client_id: 'e0de154d4404bc47e4e8',
    redirect_uri: 'http://localhost:3000/sign-in'
  };

  const queryString = '?' + new URLSearchParams(params).toString();
  window.location.href = `${GITHUB_URL}?${queryString}`;
}

export default function GithubButton({ variant = 'contained', children, ...props }) {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  async function loginWithGithub() {
    try {
      const userData = await signInUsingGitHub(code);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast('Não foi possível fazer o login!');
    }
  }

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
`;
