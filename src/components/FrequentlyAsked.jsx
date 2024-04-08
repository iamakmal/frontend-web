import React from 'react'

export default function FrequentlyAsked() {
    return (
        <div className="mx-[297px]">
        <h1 className="text-main font-semibold text-[27px] leading-[33px] text-center mb-[28px]">Frequently asked questions</h1>
        <div className="collapse collapse-plus bg-base-200 mb-[15px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[22px] font-medium text-main leading-[28px]">
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </div>
                <div className="collapse-content font-normal text-[18px] leading-[30px] text-sub">
                    <p>Lorem ipsum dolor sit amet consecutor. Facibuos commodo suscipit id ipsum. Elementum ultices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-[15px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[22px] font-medium leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                </div>
                <div className="collapse-content font-normal text-[18px] leading-[30px] text-sub">
                    <p>Lorem ipsum dolor sit amet consecutor. Facibuos commodo suscipit id ipsum. Elementum ultices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-[15px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[22px] font-medium leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                </div>
                <div className="collapse-content font-normal text-[18px] leading-[30px] text-sub">
                    <p>Lorem ipsum dolor sit amet consecutor. Facibuos commodo suscipit id ipsum. Elementum ultices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer</p>
                </div>
            </div>
        </div>
    )
}
