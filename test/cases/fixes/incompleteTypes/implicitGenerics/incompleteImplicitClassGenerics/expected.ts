import React, { Component } from 'react';

(function () {
    // Straightforward generics

    // class BaseWithoutGenerics { }
    // class BaseWithOneGeneric<T> { constructor(t: T) { } }
    // class BaseWithTwoGenerics<T, U> {constructor(t: T, u: U) {} }

    // class ExtendsBaseWithout extends BaseWithoutGenerics { }
    // new ExtendsBaseWithout();

    // class ExtendsBaseWithOneLiteral extends BaseWithOneGeneric {
    //     constructor() {
    //         super('abc')
    //     }
    // }

    // interface OneInterface {
    //     property: string;
    // }
    // const oneInterface: OneInterface = { property: 'abc' };

    // class ExtendsBaseWithOneInterface extends BaseWithOneGeneric {
    //     constructor() {
    //         super(oneInterface)
    //     }
    // }

    // type OneType = {
    //     property: string[];
    // }
    // const oneType: OneType = { property: ['a', 'b', 'c'] };

    // class ExtendsBaseWithOneType extends BaseWithOneGeneric {
    //     constructor() {
    //         super(oneType)
    //     }
    // }

    // class ExtendsBaseWithTwo extends BaseWithTwoGenerics {
    //     constructor() {
    //         super(123, false)
    //     }
    // }

    // Member object (e.g. for React state)

    // class MemberImmediateBase<First = {}, Second = {}> {
    //     member: Second;

    //     setMember(member: Second) {
    //         return member;
    //     }
    // }

    // class MemberImmediate extends MemberImmediateBase {
    //     member = {
    //         key: false,
    //     };

    //     addToState = () => {
    //         this.setMember({ key: true });
    //     };
    // }

    // class MemberCurriedBase<First = {}, Second = {}> {
    //     member: Second;

    //     setMember(getMember: (oldMember: Second) => Second) {
    //         getMember(this.member);
    //     }
    // }

    // class MemberCurried extends MemberCurriedBase {
    //     member = {
    //         key: false,
    //     };

    //     addToState = () => {
    //         this.setMember(previousMember => ({
    //             key: !previousMember.key,
    //         }));
    //     };
    // }

    // Temp: trying to create minimum repro from client TitleEdit...

    class TitleEdit extends Component {
        state = {
            hasDeleteRevealed: false,
        };

        toggleDeleteRevealed = () =>
            this.setState(prevState => ({
                hasDeleteRevealed: !prevState.hasDeleteRevealed,
            }));
    }
})();
