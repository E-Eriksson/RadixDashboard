import { useState } from "react";
import "./App.css";
import { Overview } from "./overview";
import {
  Text,
  Tabs,
  Box,
  Popover,
  Button,
  Flex,
  Avatar,
  TextArea,
  Checkbox,
  Card,
  Table,
  DropdownMenu,
  TextField,
  Select,
  Dialog,
} from "@radix-ui/themes";
import { PlusCircledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <nav>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">
              <Select.Root defaultValue="aliciaKoch">
                <Select.Trigger />
                <Select.Content color="gray" position="popper">
                  <Select.Item disabled>
                    <TextField.Root placeholder="Search the docs…">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                    </TextField.Root>
                  </Select.Item>
                  <Select.Group>
                    <Select.Label>Personal Accounts</Select.Label>
                    <Select.Item value="aliciaKoch">Alicia Koch</Select.Item>
                  </Select.Group>

                  <Select.Group>
                    <Select.Label>Teams</Select.Label>
                    <Select.Item value="ACME">ACME inc.</Select.Item>
                    <Select.Item value="monster">Monsters inc.</Select.Item>
                  </Select.Group>
                  <Select.Item disabled>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button variant="ghost">
                          {" "}
                          <PlusCircledIcon />
                          Create Team
                        </Button>
                      </Dialog.Trigger>

                      <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Create Team</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Add a new team to manage products and customers.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Team name
                            </Text>
                            <TextField.Root
                              defaultValue="ACME inc."
                              placeholder="Enter your team name"
                            />
                          </label>
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Subscription plan
                            </Text>
                          </label>
                          <Select.Root size="1">
                            <Select.Trigger placeholder="Select a plan" />
                            <Select.Content>
                              <Select.Item value="free">
                                <Text as="span" weight="bold">
                                  Free{" "}
                                </Text>
                                - trail for two weeks
                              </Select.Item>
                              <Select.Item value="pro">
                                <Text as="span" weight="bold">
                                  Pro{" "}
                                </Text>
                                - $9/month per user
                              </Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                          <Dialog.Close>
                            <Button variant="outline" color="gray">
                              Cancel
                            </Button>
                          </Dialog.Close>
                          <Dialog.Close>
                            <Button
                              variant="solid"
                              style={{ backgroundColor: "black" }}
                            >
                              Continue
                            </Button>
                          </Dialog.Close>
                        </Flex>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </Tabs.Trigger>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="customers">Customers</Tabs.Trigger>
            <Tabs.Trigger value="products">Products</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </nav>
      <div className="Topbar">
        <div>
          <h1 className="MainTitle">Dashboard</h1>
        </div>
        <Button style={{ backgroundColor: "black" }} className="Btn">
          <div width="16" height="16" />
          Download
        </Button>
      </div>
      <Tabs.Root defaultValue="overview">
        <Tabs.List className="TabsContainer">
          <Tabs.Trigger className="Tabs" value="overviev">
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger className="Tabs" value="analytics">
            Analytics
          </Tabs.Trigger>
          <Tabs.Trigger className="Tabs" value="Reports">
            Reports
          </Tabs.Trigger>
          <Tabs.Trigger className="Tabs" value="Notifications">
            Notifications
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="Cards">
        <Card className="Card">
          <Flex gap="3" align="center">
            <Box>
              <div className="TextAndIconWrapper">
                <Text as="div" className="SmallHeading" size="2">
                  Total Revenue
                </Text>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="Icons"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              <Text as="div" className="MiddleText">
                $45, 231.89
              </Text>
              <Text className="SmallestText">+20.1% from last month</Text>
            </Box>
          </Flex>
        </Card>

        <Card className="Card">
          <Flex gap="3" align="center">
            <Box>
              <div className="TextAndIconWrapper">
                <Text as="div" className="SmallHeading" size="2">
                  Subscriptions
                </Text>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="Icons"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <Text as="div" className="MiddleText">
                +2350
              </Text>
              <Text className="SmallestText">+180.1% from last month</Text>
            </Box>
          </Flex>
        </Card>

        <Card className="Card">
          <Flex gap="3" align="center">
            <Box>
              <div className="TextAndIconWrapper">
                <Text as="div" className="SmallHeading" size="2">
                  Sales
                </Text>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="Icons"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>

              <Text as="div" className="MiddleText">
                +12,234
              </Text>
              <Text className="SmallestText">+19% from last month</Text>
            </Box>
          </Flex>
        </Card>

        <Card className="Card">
          <Flex gap="3" align="center">
            <Box>
              <div className="TextAndIconWrapper">
                <Text as="div" className="SmallHeading" size="2">
                  Active Now
                </Text>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="Icons"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <Text as="div" className="MiddleText">
                +573
              </Text>
              <Text className="SmallestText">+201 since last hour</Text>
            </Box>
          </Flex>
        </Card>
      </div>
      <div className="WrapAll">
        <div className="Wrapper">
          <h1 className="Overview">Overview</h1>
          <Overview />
        </div>

        <div className="TableContainer">
          <div className="TitleAndDescriptionContainer">
            <div className="RecentSales">Recent Sales</div>
            <div className="SalesText">You made 265 sales this month.</div>
          </div>

          <Table.Root>
            <Table.Body className="TableBody">
              <Table.Row className="TableRow">
                <Table.RowHeaderCell className="RowHeaderCell">
                  <Avatar
                    src="https://ui.shadcn.com/avatars/01.png"
                    className="Avatars"
                    fallback="OM"
                  ></Avatar>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="Name">Olivia Martin</div>
                  <div className="Mail">olivia.martin@email.com</div>
                </Table.Cell>
                <Table.Cell>+$1,999.00</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Avatar
                    src="https://ui.shadcn.com/avatars/02.png"
                    className="Avatars"
                    fallback="JL"
                  ></Avatar>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="Name">Jackson Lee</div>
                  <div className="Mail">jackson.lee@email.com</div>
                </Table.Cell>
                <Table.Cell>+$39.00</Table.Cell>
              </Table.Row>

              <Table.Row className="TableRow">
                <Table.RowHeaderCell className="RowHeaderCell">
                  <Avatar
                    src="https://ui.shadcn.com/avatars/03.png"
                    className="Avatars"
                    fallback="IN"
                  ></Avatar>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="Name">Isabella Nguyen</div>
                  <div className="Mail">isabella.nguyen@email.com</div>
                </Table.Cell>
                <Table.Cell>+$299.00</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Avatar
                    src="https://ui.shadcn.com/avatars/04.png"
                    className="Avatars"
                    fallback="WK"
                  ></Avatar>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="Name">William Kim</div>
                  <div className="Mail">will@email.com</div>
                </Table.Cell>
                <Table.Cell>+$99.00</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <Avatar
                    src="https://ui.shadcn.com/avatars/05.png"
                    className="Avatars"
                    fallback="SD"
                  ></Avatar>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="Name">Sofia Davis</div>
                  <div className="Mail">sofia.davis@email.com</div>
                </Table.Cell>
                <Table.Cell>+$39.00</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </>
  );
}

export default App;
