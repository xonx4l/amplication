import React from "react";
import { CommitMessage } from "../Components/CommitMessage";
import UserBadge from "../Components/UserBadge";
import { Commit } from "../models";
import "./CommitData.scss";
import {
  EnumContentAlign,
  EnumFlexDirection,
  EnumTextColor,
  EnumTextStyle,
  FlexItem,
  Text,
} from "@amplication/ui/design-system";

type Props = {
  commit: Commit;
};
const CommitData: React.FC<Props> = ({ commit }) => {
  return (
    <FlexItem>
      <FlexItem.FlexStart>
        <UserBadge />
      </FlexItem.FlexStart>
      <FlexItem direction={EnumFlexDirection.Column}>
        <Text
          singleLineEllipsis={true}
          textStyle={EnumTextStyle.Tag}
          textColor={EnumTextColor.White}
        >
          <CommitMessage commit={commit} />
        </Text>
        <Text textStyle={EnumTextStyle.Subtle}>
          {new Date(commit.createdAt).toDateString()}
        </Text>
      </FlexItem>
    </FlexItem>
  );
};

export default CommitData;
