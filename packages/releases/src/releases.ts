import { z } from 'zod';
import { gameMakerReleaseWithNotesSchema } from './feeds.types.js';
import { fetchJson } from './fetch.js';

/**
 * This package is used to generate a releases object, stored
 * as a JSON file for public download. The latest version of this
 * releases object can be downloaded from this URL.
 */
export const releasesUrl =
  'https://gist.githubusercontent.com/adam-coster/ff8bf0f892f40ca353a94103015b6493/raw/releases-summary.json';

/**
 * Given a URL to an already-synthesized
 * GameMaker Studio merged-releases feed,
 * download the feed and return the list of
 * releases.
 */
export async function fetchReleasesSummaryWithNotes(url = releasesUrl) {
  const releases = await fetchJson(
    url,
    z.array(gameMakerReleaseWithNotesSchema),
  );
  return releases;
}
