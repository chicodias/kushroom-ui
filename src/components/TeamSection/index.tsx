import React from "react";
import Link from "next/link";
import { Flex, Heading, Avatar } from "@/once-ui/components";
import { about } from "@/app/resources/content";

export function TeamSection() {
  return (
    <Flex fillWidth gap="24" mobileDirection="column">
      <Flex flex={1} paddingLeft="l" paddingTop="24" horizontal="end">
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          Equipe
        </Heading>
      </Flex>
      {/* Avatares lado a lado */}
      <Flex flex={8} paddingX="20" wrap gap="m">
        {about.work.experiences.map((member) => (
          <Link key={member.company} href="/work" passHref>
            <Avatar
              src={member.image}
              size="l"
              radius="full"
              style={{ cursor: "pointer" }}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
