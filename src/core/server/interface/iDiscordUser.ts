/**
 * The interface associated with a Discord User.
 * @export
 * @interface DiscordUser
 */
export interface DiscordUser {
    id: string;
    username: string;
    avatar: string;
    email?: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    locale: string;
    mfa_enabled: boolean;
    number: string;
}
