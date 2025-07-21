import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio website', () => {
  render(<App />);
  const nameElement = screen.getByText(/Sheikh Maaz Akbar/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders navigation menu', () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  const projectsLink = screen.getByText(/Projects/i);
  const skillsLink = screen.getByText(/Skills/i);
  const contactLink = screen.getByText(/Contact/i);
  
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroText = screen.getByText(/Final Year Computer Science Student/i);
  expect(heroText).toBeInTheDocument();
});

test('renders contact information', () => {
  render(<App />);
  const emailText = screen.getByText(/maazakbar404@gmail.com/i);
  expect(emailText).toBeInTheDocument();
});
