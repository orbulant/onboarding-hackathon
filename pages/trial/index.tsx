import Layout from "../../components/Layout";
import { tradingAmounts } from "../../enums/trial";
import { Card, Grid, Text, Row } from "@nextui-org/react";

const trial = () => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="center">
        <Grid xs={2}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"/trialcardimage.jpeg"}
                objectFit="cover"
                width="100%"
                height={140}
                alt={"Trial Link"}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>Start now!</Text>
                <Text>
                  Invite friends now and enjoy an additional{" $"}
                  {tradingAmounts.base + tradingAmounts.increment}{" "}
                  <b>{tradingAmounts.currency}</b>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <Card.Body>
              <Text>Sample card.</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <Card.Body>
              <Text>Sample card.</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default trial;
