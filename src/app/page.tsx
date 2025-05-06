import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { gallery } from "@/app/resources/content";
import { Hero } from "@/components/Hero";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  const bgSrc = gallery.images[0].src;
  return (
    <Column
      maxWidth="m"
      gap="xl"
      horizontal="center"
      style={{
        backgroundImage: `url(${baseURL}${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // give it some padding so you actually see the bg behind text
        padding: "2rem 1rem",
        // ensure the text contrasts
        color: "white",
        // relative/zIndex to stack above anything
        position: "relative",
        zIndex: 1,
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Hero />
      </Column>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Últimos releases
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 1]} columns="2" />
          </Flex>
        </Flex>
      )}
      {/* <Projects range={[2]} /> */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
