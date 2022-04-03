import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Title } from '@mantine/core';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header fixed height={56}>
      <Container className={classes.inner}>
        
        <Group className={classes.links} spacing={7}>
          {items}
        </Group>

        <Title style={{color: '#C1C2C5'}}>Nick Pisciotta</Title>

        <Group spacing={0} className={classes.social} position="right" noWrap>
            <a href="https://github.com/Piscionj" target="_blank">
          <ActionIcon size="lg">
            <BrandGithub size={18} />
          </ActionIcon>
          </a>
          <a href="https://www.linkedin.com/in/nick-pisciotta-793609182/" target="_blank">
          <ActionIcon size="lg">
            <BrandLinkedin size={18} />
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </Header>
  );
}