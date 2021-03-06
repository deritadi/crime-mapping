import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/core";

import { PENGADUAN_STATUS } from "../useListPengaduan";

export function Filter({ filter, setFilter }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down">
        Filter Laporan by Status
      </MenuButton>
      <MenuList>
        {Object.keys(PENGADUAN_STATUS).map((key) => (
          <MenuItem key={key} onClick={() => setFilter(PENGADUAN_STATUS[key])}>
            <Text color={PENGADUAN_STATUS[key] === filter ? "#1703fc" : "grey"}>
              {PENGADUAN_STATUS[key]}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
