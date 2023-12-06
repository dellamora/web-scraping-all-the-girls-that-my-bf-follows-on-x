require("dotenv").config();

async function getUserInfo(handle) {
  const res = await fetch(
    "https://twitter.com/i/api/graphql/G3KGOASz96M-Qu0nwmGXNg/UserByScreenName?variables=%7B%22screen_name%22%3A%22hnrbs_%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Atrue%2C%22hidden_profile_subscriptions_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_is_identity_verified_enabled%22%3Atrue%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%7D",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
        authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-client-transaction-id":
          "R91DhQlnWeZPxA6wROyynIqVkvhQ83kGVp+mTUMmvqJ1d+f+FDDRpOETLkxvghb6hucGVEbqxVZ/aXRBqCRBIsP4qMjXRg",
        "x-csrf-token":
          "640490e7e5d45f3a2ec65856ff6c6ccdfe29476a6a7c483d9c88f84f86f3e26ebbdda617513ba53521d57ad62f51ba851fc202fa945c4f5cbb204a8c8538a3305c53c1af6d912f5e40a2212ae7c7f284",
        "x-twitter-active-user": "yes",
        "x-twitter-auth-type": "OAuth2Session",
        "x-twitter-client-language": "en",
        cookie:
          'g_state={"i_l":0}; kdt=DQswbKww6KI2S2r11BYWcP3k1VblvXFryd2BfRyv; _ga_BYKEBDM7DS=GS1.1.1690905971.1.1.1690905989.0.0.0; _ga=GA1.2.1451440383.1677519671; _ga_ZJQNEMXF73=GS1.1.1690905997.1.1.1690906439.0.0.0; mbox=PC#bc67b20b9dd54a0a83aa5321f0c6da11.34_0#1756742717|session#42816e071de5400f8c0e2766c5876a65#1693499778; night_mode=0; des_opt_in=Y; dnt=1; auth_multi="2769594699:1001d4a41547845bc6cc8787e667f358331f69c1"; auth_token=be0d694c2b3d507f8a7d4ca2166b2a8d8a23818a; guest_id_ads=v1%3A170062083297503071; guest_id_marketing=v1%3A170062083297503071; guest_id=v1%3A170062083297503071; twid=u%3D1297352941008039937; ct0=640490e7e5d45f3a2ec65856ff6c6ccdfe29476a6a7c483d9c88f84f86f3e26ebbdda617513ba53521d57ad62f51ba851fc202fa945c4f5cbb204a8c8538a3305c53c1af6d912f5e40a2212ae7c7f284; lang=en; _gid=GA1.2.1328233834.1700961883; personalization_id="v1_c3Hr1PSbVPhnLKcDTSTrMA=="',
        Referer: "https://twitter.com/hnrbs_/following",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );
  const data = await res.json();
  console.log(data.data.user.result);
}

async function getUserFollowers(handle) {
  const res = await fetch(
    "https://twitter.com/i/api/graphql/8cyc0OKedV_XD62fBjzxUw/Following?variables=%7B%22userId%22%3A%221110118706229768192%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Afalse%7D&features=%7B%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_home_pinned_timelines_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
        authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-client-transaction-id":
          "QYp8xLS69XmxD0oSfyx5Jn7DDU09YrNpTwDwawMC4uzQ4U1XRHL55Sd7SqZRcAaWir0tVUBXFo+nTGGxtRPJ2GLIprW2QA",
        "x-client-uuid": "7e28391d-79c8-4378-861e-fd6b52e0aad1",
        "x-csrf-token":
          "f922be0e038ba5f8f2860b1d6833530bde3cffa52368eb030ba986e10699899200ab10c0fbc1576979c0e6f070902841ad23b3fd95a1fc4d09f9e50d02fed5436f042d95cdd3d2d4a9676d36653d2450",
        "x-twitter-active-user": "yes",
        "x-twitter-auth-type": "OAuth2Session",
        "x-twitter-client-language": "en",
        cookie:
          'g_state={"i_l":0}; kdt=DQswbKww6KI2S2r11BYWcP3k1VblvXFryd2BfRyv; _ga_BYKEBDM7DS=GS1.1.1690905971.1.1.1690905989.0.0.0; _ga=GA1.2.1451440383.1677519671; _ga_ZJQNEMXF73=GS1.1.1690905997.1.1.1690906439.0.0.0; mbox=PC#bc67b20b9dd54a0a83aa5321f0c6da11.34_0#1756742717|session#42816e071de5400f8c0e2766c5876a65#1693499778; night_mode=0; des_opt_in=Y; _gid=GA1.2.1328233834.1700961883; auth_multi="2769594699:1001d4a41547845bc6cc8787e667f358331f69c1"; auth_token=be0d694c2b3d507f8a7d4ca2166b2a8d8a23818a; guest_id_ads=v1%3A170104008364036131; guest_id_marketing=v1%3A170104008364036131; lang=en; guest_id=v1%3A170104008364036131; twid=u%3D1297352941008039937; ct0=f922be0e038ba5f8f2860b1d6833530bde3cffa52368eb030ba986e10699899200ab10c0fbc1576979c0e6f070902841ad23b3fd95a1fc4d09f9e50d02fed5436f042d95cdd3d2d4a9676d36653d2450; personalization_id="v1_yM3k0JnUSxB2Bk7fgk7wiQ=="',
        Referer: "https://twitter.com/hnrbs_/following",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );

  const data = await res.json();
  const entries =
    data?.data?.user?.result?.timeline?.timeline?.instructions?.[3]?.entries ||
    [];

  const followersList = entries
    .map((item) => item?.content?.itemContent?.user_results?.result?.legacy)
    .filter((legacy) => legacy)
    .map(({ name, screen_name }) => ({ name, screen_name }));

  console.log(followersList);
  return data;
}

(async function () {
  try {
    const handle = "hnrbs_";
    await getUserInfo(handle);
  } catch (error) {
    console.log(error.message);
  }
})();
