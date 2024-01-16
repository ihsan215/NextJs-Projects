import React from "react";
import Link from "next/link";

function Test() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link href="test/sub-test/1">Test - 1</Link>
        </li>
        <li>
          <Link href="test/sub-test/2">Test - 2</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Test;
