import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Text",
  component: Text,
  args: {
    children: "Text",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Text {...args} />,
  args: {
    children: "Text",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Text size="xs">xs size (12px)</Text>
      <Text size="sm">sm size (14px)</Text>
      <Text size="md">md size (16px)</Text>
      <Text size="lg">lg size (20px)</Text>
      <Text size="xl">xl size (24px)</Text>
      <Text size="2xl">2xl size (32px)</Text>
      <Text size="3xl">3xl size (48px)</Text>
      <Text size="4xl">4xl size (72px)</Text>
    </div>
  ),
};

export const AllWeight: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Text
        weight="regular"
        size="3xl"
      >
        regular (400)
      </Text>
      <Text
        weight="medium"
        size="3xl"
      >
        medium (500)
      </Text>
      <Text
        weight="semibold"
        size="3xl"
      >
        semibold (600)
      </Text>
      <Text
        weight="bold"
        size="3xl"
      >
        bold (700)
      </Text>
      <Text
        weight="extrabold"
        size="3xl"
      >
        extrabold (800)
      </Text>
    </div>
  ),
};

export const AllColor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Text
        color="primary"
        size="3xl"
      >
        primary
      </Text>
      <Text
        color="secondary"
        size="3xl"
      >
        secondary
      </Text>
      <Text
        color="tertiary"
        size="3xl"
      >
        tertiary
      </Text>
      <Text
        color="disabled"
        size="3xl"
      >
        disabled
      </Text>
    </div>
  ),
};

export const AllLineHeight: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 30, width: 400 }}>
      <Text
        lineHeight="tight"
        size="2xl"
      >
        text text text text text text text text text text text text text text text text text text
        text text text text text text
      </Text>
      <Text
        lineHeight="normal"
        size="2xl"
      >
        text text text text text text text text text text text text text text text text text text
        text text text text text text
      </Text>
      <Text
        lineHeight="relaxed"
        size="2xl"
      >
        text text text text text text text text text text text text text text text text text text
        text text text text text text
      </Text>
    </div>
  ),
};

export const AllAlign: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Text align="left">text</Text>
      <Text align="center">text</Text>
      <Text align="right">text</Text>
      <Text align="justify">text</Text>
    </div>
  ),
};

export const AllTruncate: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 30, width: 400 }}>
      <Text
        truncate={true}
        size="2xl"
      >
        text text text text text text text text text text text text text text text text text text
        text text text text text text
      </Text>
      <Text
        truncate={false}
        size="2xl"
      >
        text text text text text text text text text text text text text text text text text text
        text text text text text text
      </Text>
    </div>
  ),
};
