import React, { ReactNode } from "react";
import Nav from "../components/Nav";

type Props = { children: ReactNode, contentStyle?: string };

const MainLayout = (props: Props) => {
	return (
		<>
			<Nav />
			<div style={{backgroundColor: "red"}}>{props.children}</div>
			<div>MainLayout</div>
		</>
	);
};

export default MainLayout
