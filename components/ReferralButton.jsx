import {v4 as uuidv4} from 'uuid'
import Link from "next/link"

export default function ReferralButton() {

    var baseURL = "http://www.twitter.com/share?";
    var referralURL = "http://bitwewe/tradingbot/refer/" + uuidv4();
    var encodedReferralURL = encodeURIComponent(referralURL)

    var text = "I am currently trading on Bitwewe, join me to earn extra rewards!\n\n"
    var encodedText = encodeURIComponent(text)
    var tweetURL = baseURL + "text=" + encodedText + "&url=" + encodedReferralURL

    return (
        <>
            <Link href={tweetURL} target="_blank">
                Twitter
            </Link>
        </>
    )
}