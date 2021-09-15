import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import GET_ISSUE from "../lib/queries/getIssue";
import fetch from "cross-fetch";
import { setContext } from "@apollo/client/link/context";

class IssueRepository {
  constructor() {}

  httpLink = new HttpLink({ uri: "https://api.github.com/graphql", fetch });

  authLink = setContext((_, { headers }) => {
    const token = process.env.PAT;
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });

  client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    link: this.authLink.concat(this.httpLink),
    cache: new InMemoryCache(),
  });

  async fetchIssue(orgName, repoName, issueId) {
    /*    const orgName = "OpenQDev";
    const repoName = "app";
    const issueId = 86; */
    const promise = new Promise(async (resolve, reject) => {
      try {
        const result = await this.client.query({
          query: GET_ISSUE,
          variables: { orgName, repoName, issueId },
        });
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });

    return promise;
  }
}

export default IssueRepository;
