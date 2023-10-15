import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';
import { arg } from '@ascua/decorators';

export default class extends Component {
	@arg count = 100;

	@cache get testimonials() {
		return [
			{
				name: 'Anup Jadhav',
				user: 'Director, Partner Delivery Success, C360 Cross-Cloud, Salesforce',
				text: `"It think it's going to change how we query databases."`,
				img: '/static/img/logos/salesforce1.svg',
			},
			{
				name: 'Jeff Delaney',
				user: 'Web Developer and Tech Influencer, Fireship',
				text: `"Now that it's at 1.0, there is a pretty good use case to using it in some serious projects."`,
				img: '/static/img/logos/fireship.svg',
			},
			{
				name: 'Rajani Rao FRSA MBCS',
				user: 'R&D Principal Technologist, Aveva',
				text: `"Throughout my years dealing with database challenges, SurrealDB seems to be a beacon of innovation. Addressing issues like multi-tenancy, blending the best of hybrid & distributed databases, and ensuring unmatched scalability & performance. Oh and btw it had ML integrated in the database - how cool is that! But the true standout? Live queries and change feeds. Such features are not just advancements, they're revolutions in how we handle data. Goes to show the evolution of databases are not over yet!!"`,
				img: '/static/img/logos/aveva.svg',
			},
			{
				name: 'Necmettin Karakaya',
				user: 'Lead Software Engineer, Figment',
				text: `"Exciting things are happening in the Tech industry. Bun just announced version 1.0 is prod ready. And now SurrealDB is launching stable version 1.0. This is the most significant shift in my decade-long developer experience. Excited to see what's next!"`,
				img: '/static/img/logos/figment.png',
			},
			{
				name: 'Chris Hay',
				user: 'CTO, IBM iX',
				text: `"It's fast, small, can run on browser, edge and cloud.  It can handle large data.  It can run in-memory like redis or disk like sqlite and it can run multi-cluster.   It can sync between cloud and edge.  And to top of it off, it can also run as a graphdb. It's interesting."`,
				img: '/static/img/logos/ibmix.svg',
			},
			{
				name: 'Sebastian Wessel',
				user: 'Senior Developer',
				text: `"It's incredible what SurrealDB provides and also what's coming up in the near future. Embedding, scaling, machine learning, live queries... SurrealDB as an event store or persisted broker or IoT platform - I've so many ideas right now for the next project. Awesome!"`,
			},
			{
				name: 'Travis Barney',
				user: 'Principal Engineer, Vivint',
				text: `"Very excited to put these capabilities into practice."`,
				img: '/static/img/logos/vivint.png',
			},
			{
				name: 'Reza Qorbani',
				user: 'Co-founder and CTO, Qualia',
				text: `"SurrealDB looks amazing. Cloud-native Database written in Rust using SQL for structured and unstructured data, graph querying, full-text indexing, and geospatial querying, while supporting row-level permissions."`,
				img: '/static/img/logos/qualia.png',
			},
		];
	}
}
