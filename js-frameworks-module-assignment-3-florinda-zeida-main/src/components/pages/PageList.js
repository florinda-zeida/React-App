import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import { PAGE_PATH } from "../../constants/Api";



export default function PageList() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = BASE_URL + PAGE_PATH

	useEffect(function () {
		async function getPages() {
			try {
				const response = await axios.get(url);
				setPages(response.data);
				console.log("response", response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getPages();
		
	}, [url]);

	if (loading) return <div>Loading pages...</div>;

	if (error) return <div>{}</div>;

	return (
		<div className="pages_content">
		<ul className="links-pages">
			{pages.map((page) => {
				return (
					<li className="links_item" key={page.id}>
						<Link className="links" to={`/page/${page.id}`}>{page.title.rendered}</Link>
					</li>
				);
			})}
		</ul>
		</div>
	);
}


